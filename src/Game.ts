import Automata from "./Automata";

type Move = { move: string; state: Int8Array };

export default class Game {
  buttons: { [key: string]: number } = {};
  history: Move[] = [];
  public automata: Automata;

  constructor(public config:string) {
    let [buttonsList, initial] = Game.parseConfig(config);
    this.automata = new Automata(initial);
    this.setCardsFromList(buttonsList);
  }

  static parseConfig(config:string){
    return config.match(/(.*)\n([^]*)/).slice(1);
  }

  setCardsFromList(list: string) {
    for (let s of list.split(/[;\n]/)) {
      let n = 1;
      s = s.replace(/\*([0-9]+)/, (m) => {
        n = Number(m.substr(1));
        return "";
      });
      s = s.trim();
      if(s.length>0)
        this.buttons[s] = (this.buttons[s] || 0) + n;
    }
    console.log(this.buttons);
  }

  play(move: string) {
    if (this.buttons[move]) {
      this.history.push({ move, state: new Int8Array(this.automata.alive) });
      this.automata.cycle(move);
      this.buttons[move]--;
    }
  }

  undo() {
    let prevMove = this.history.pop();
    this.buttons[prevMove.move] = (this.buttons[prevMove.move] || 0) + 1;
    this.automata.setAll(prevMove.state);
  }

  canUndo() {
    return this.history.length > 0;
  }

  hasButtonsLeft(){
    return Math.max.apply(null, Object.values(this.buttons)) >= 1
  }

  success() {    
    return this.automata.isAlive() && !this.hasButtonsLeft();
  }
}
