const BSIZE = 100;
const LEFT = 0,
  TOP = 1,
  WIDTH = 2,
  HEIGHT = 3;
const X = 0,
  Y = 1;

export default class Automata {
  public alive = new Int8Array(BSIZE * BSIZE);
  public buffer = new Int8Array(BSIZE * BSIZE);

  static calculate(rules: string, from: Int8Array, to: Int8Array) {
    const [born, survive] = Automata.parseRules(rules);
    to.fill(0);
    for (let i = BSIZE + 1; i < BSIZE * (BSIZE - 1) - 1; i++) {
      if (from[i]) {
        to[i - BSIZE - 1]++;
        to[i - BSIZE]++;
        to[i - BSIZE + 1]++;
        to[i - 1]++;
        to[i + 1]++;
        to[i + BSIZE - 1]++;
        to[i + BSIZE]++;
        to[i + BSIZE + 1]++;
      }
    }
    for (let i = BSIZE + 1; i < BSIZE * (BSIZE - 1) - 1; i++)
      to[i] = (from[i] && survive[to[i]]) || (!from[i] && born[to[i]]) ? 1 : 0;
    return to;
  }

  static parseRules(rule: string) {    
    let [match, b, s] = rule.match(/B([0-9]*)\/S([0-9]*)/);
    return [b, s].map((m) => {
      let r = new Int8Array(9);
      if (m)
        for (let v of m.split("")) {
          r[v] = 1;
        }
      return r;
    });
  }

  static fragmentOf(data: Int8Array, rect: number[]) {
    let lines: number[][] = [];
    for (let y = rect[TOP]; y < rect[TOP] + rect[HEIGHT]; y++) {
      let row = data.slice(
        y * BSIZE + rect[LEFT],
        y * BSIZE + rect[LEFT] + rect[WIDTH]
      );
      lines.push(Array.from(row));
    }
    return lines;
  }

  constructor(initial:string) {
    this.setFromString(initial)
  }

  setFromString(s:string){
    let grid = s.split("\n").map(line=>line.split("").map(c => c=="#"?1:0));
    let top = Math.ceil(BSIZE/2 - grid.length/2)
    let left = Math.ceil(BSIZE/2 - grid[0].length/2)
    for(let y=0;y<grid.length;y++){
      let line = grid[y];
      for(let x=0;x<line.length;x++){
        if(grid[y][x])
          this.set([x+left,y+top]);
      }
    }
  }

  peekFragment(rules: string) {
    Automata.calculate(rules, this.alive, this.buffer);
  }

  cycle(rules: string) {
    Automata.calculate(rules, this.alive, this.buffer);
    let temp = this.alive;
    this.alive = this.buffer;
    this.buffer = temp;
    return this;
  }

  isAlive(){
    return this.alive.indexOf(1)>=0;
  }

  get(at: number[]) {
    return this.alive[at[0] + at[1] * BSIZE];
  }

  set(at: number[], live: boolean = true) {
    this.alive[at[0] + at[1] * BSIZE] = live ? 1 : 0;
    return this;
  }

  setAll(state:Int8Array){
    this.alive.set(state);
    this.buffer.set(state);
  }

  toggle(at: number[], live: boolean = true) {
    return this.set(at, !this.get(at));
  }

  fragment(rect: number[]) {
    return Automata.fragmentOf(this.alive, rect);
  }

  bufferFragment(rect: number[]) {
    return Automata.fragmentOf(this.buffer, rect);
  }
  
  clear(){
    this.alive.fill(0);
    this.buffer.fill(0);
  }
}
