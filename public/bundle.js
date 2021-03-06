(function () {
  'use strict';

  const lang = {
      instructions: `Goal of the game is to play all the cards in such an order that at least one alive cell is left.
A card can kill some cells and create new ones, according to the rule written on the card.
Each digit after the S on the card means that a living cell with exactly as much living neighbors will live, otherwise it will die.
Each digit after the B on the card means that in empty cell with exactly as much living neighbors, a new living cell will appear.

For example, B3/S23 means cell survives only with 2 or 3 neighbors, no more, no less; and born when there is exactly 3 neighbors.
`
  };

  var n,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return p(n,o,l&&l.key,l&&l.ref,null)}function p(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n.vnode&&n.vnode(r),r}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function g(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return g(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=a({},o)).__v=i,t=A(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w(o):r),T(u,o),t!=r&&g(o)));});}function b(n,l,u,i,t,o,r,f,s){var a,h,p,y,d,m,g,k=u&&u.__k||c,_=k.length;if(f==e&&(f=null!=o?o[0]:_?w(u,0):null),a=0,l.__k=x(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[a])||p&&u.key==p.key&&u.type===p.type)k[a]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null;}if(y=A(n,u,p=p||e,i,t,o,r,f,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||y,u)),null!=y){var c;if(null==m&&(m=y),void 0!==u.__d)c=u.__d,u.__d=void 0;else if(o==p||y!=f||null==y.parentNode){n:if(null==f||f.parentNode!==n)n.appendChild(y),c=null;else {for(d=f,h=0;(d=d.nextSibling)&&h<_;h+=2)if(d==y)break n;n.insertBefore(y,f),c=f;}"option"==l.type&&(n.value="");}f=void 0!==c?c:y.nextSibling,"function"==typeof l.type&&(l.__d=f);}else f&&p.__e==f&&f.parentNode!=n&&(f=w(p));}return a++,u}),l.__e=m,null!=o&&"function"!=typeof l.type)for(a=o.length;a--;)null!=o[a]&&v(o[a]);for(a=_;a--;)null!=k[a]&&D(k[a],k[a]);if(g)for(a=0;a<g.length;a++)j(g[a],g[++a],g[++a]);}function x(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)x(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?p(null,n,null,null,n):null!=n.__e||null!=n.__c?p(n.type,n.props,n.key,null,n.__v):n):n);return u}function P(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||N(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||N(n,o,l[o],u[o],i);}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===s.test(l)?u+"px":null==u?"":u;}function N(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||C(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||C(o,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,z,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,z,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function z(l){this.l[l.type](n.event?n.event(l):l);}function A(l,u,i,t,o,r,f,e,c){var s,v,h,p,y,w,g,k,_,x,P=u.type;if(void 0!==u.constructor)return null;(s=n.__b)&&s(u);try{n:if("function"==typeof P){if(k=u.props,_=(s=P.contextType)&&t[s.__c],x=s?_?_.props.value:s.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new m(k,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=a({},v.__s)),a(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,y=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)||u.__v===i.__v&&!v.__){for(v.props=k,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),s=0;s<u.__k.length;s++)u.__k[s]&&(u.__k[s].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,y,w);});}v.context=x,v.props=k,v.state=v.__s,(s=n.__r)&&s(u),v.__d=!1,v.__v=u,v.__P=l,s=v.render(v.props,v.state,v.context),u.__k=null!=s&&s.type==d&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=v.getChildContext&&(t=a(a({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,y)),b(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,o,r,f,c);(s=n.diffed)&&s(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,o,r,f){var s,a,v,h,p,y=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1;}if(null===l.type)y!==d&&n.data!=d&&(n.data=d);else {if(null!=o&&(o=c.slice.call(n.childNodes)),v=(y=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(y===e)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}P(n,d,y,t,f),l.__k=l.props.children,h||b(n,l,u,i,"foreignObject"!==l.type&&t,o,r,e,f),f||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],A(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:c.slice.call(u.childNodes),f,i||e,t),T(f,l);}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return k(u.__E=u)}catch(l){n=l;}throw n}},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;//# sourceMappingURL=preact.module.js.map

  const BSIZE = 100;
  const LEFT = 0, TOP = 1, WIDTH = 2, HEIGHT = 3;
  class Automata {
      constructor(initial) {
          this.alive = new Int8Array(BSIZE * BSIZE);
          this.buffer = new Int8Array(BSIZE * BSIZE);
          this.setFromString(initial);
      }
      static calculate(rules, from, to) {
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
      static parseRules(rule) {
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
      static fragmentOf(data, rect) {
          let lines = [];
          for (let y = rect[TOP]; y < rect[TOP] + rect[HEIGHT]; y++) {
              let row = data.slice(y * BSIZE + rect[LEFT], y * BSIZE + rect[LEFT] + rect[WIDTH]);
              lines.push(Array.from(row));
          }
          return lines;
      }
      setFromString(s) {
          let grid = s.split("\n").map(line => line.split("").map(c => c == "#" ? 1 : 0));
          let top = Math.ceil(BSIZE / 2 - grid.length / 2);
          let left = Math.ceil(BSIZE / 2 - grid[0].length / 2);
          for (let y = 0; y < grid.length; y++) {
              let line = grid[y];
              for (let x = 0; x < line.length; x++) {
                  if (grid[y][x])
                      this.set([x + left, y + top]);
              }
          }
      }
      peekFragment(rules) {
          Automata.calculate(rules, this.alive, this.buffer);
      }
      cycle(rules) {
          Automata.calculate(rules, this.alive, this.buffer);
          let temp = this.alive;
          this.alive = this.buffer;
          this.buffer = temp;
          return this;
      }
      isAlive() {
          return this.alive.indexOf(1) >= 0;
      }
      get(at) {
          return this.alive[at[0] + at[1] * BSIZE];
      }
      set(at, live = true) {
          this.alive[at[0] + at[1] * BSIZE] = live ? 1 : 0;
          return this;
      }
      setAll(state) {
          this.alive.set(state);
          this.buffer.set(state);
      }
      toggle(at, live = true) {
          return this.set(at, !this.get(at));
      }
      fragment(rect) {
          return Automata.fragmentOf(this.alive, rect);
      }
      bufferFragment(rect) {
          return Automata.fragmentOf(this.buffer, rect);
      }
      clear() {
          this.alive.fill(0);
          this.buffer.fill(0);
      }
  }

  class Game {
      constructor(config) {
          this.config = config;
          this.buttons = {};
          this.history = [];
          let [buttonsList, initial] = Game.parseConfig(config);
          this.automata = new Automata(initial);
          this.setCardsFromList(buttonsList);
      }
      static parseConfig(config) {
          return config.match(/(.*)\n([^]*)/).slice(1);
      }
      setCardsFromList(list) {
          for (let s of list.split(/[;\n]/)) {
              let n = 1;
              s = s.replace(/\*([0-9]+)/, (m) => {
                  n = Number(m.substr(1));
                  return "";
              });
              s = s.trim();
              if (s.length > 0)
                  this.buttons[s] = (this.buttons[s] || 0) + n;
          }
          console.log(this.buttons);
      }
      play(move) {
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
      hasButtonsLeft() {
          return Math.max.apply(null, Object.values(this.buttons)) >= 1;
      }
      success() {
          return this.automata.isAlive() && !this.hasButtonsLeft();
      }
  }

  const fragmentRect = [30, 30, 40, 40];
  function elementIndex(e) {
      return [...e.parentElement.childNodes].indexOf(e);
  }
  const _levels = `
B/S1; B2/S; B3/S
.##
##.
.#.
===
B/S0; B/S1; B/S2; B/S5
######
######
.#####
######
######
#####.
===  
B/S0; B1/S; B/S12; B/S123; B/S234; B/S345
######
######
######
######
######
######
===  
B1/S*2; B2/S*2; B3/S*2; B4/S*2
....#
...#.
..#..
.#...
#....
===
B1/S; B2/S; B3/S; B4/S; B5/S; B3/S23
#..##..#.#.###
#..#.#.#.#.#..
#..#.#.###.###
#..#.#...#.#.#
##.##....#.###
===
B1/S; B2/S*2; B/S3; B/S4;
#
===  
B1/S*2; B2/S*2; B3/S*2; B4/S*2
#
===
B1/S*2;B2/S*2;B1/S1*2;B/S3*2
#...#
.....
.....
.....
#...#
===
B2/S*3;B3/S23*3;B/S8
####
===
B1/S;B2/S;B3/S;B4/S;B5/S
#.....#
.#...#.
..#.#..
...#...
..#.#..
.#...#.
#.....#
===  
B/S0; B/S1; B/S2; B/S3; B2/S
#####
.....
#####
.....
#####
===  
B/S0; B/S1; B/S2; B/S3; B/S4; B1/S
#####
..#..
.###.
#...#
#####
===  
B/S0; B/S1; B/S2; B3/S
#######
===  
B/S0; B/S1; B/S2; B/S3; B2/S01234
#######
.......
#######
===  
B1/S*2;B2/S*2;B3/S*2;B4/S*2
..###..
..#.#..
..#.#..
...#...
#.###..
.#.#.#.
...#..#
..#.#..
..#.#..
===
B/S0; B/S1; B/S2; B/S3; B/S4; B2/S0*2
####.##
#.....#
##.####
`
      .split("===")
      .map((s) => s.trim());
  class GUI extends m {
      constructor() {
          super(...arguments);
          this.state = {
              game: new Game(_levels[localStorage["celau-last-played"]] || _levels[0]),
              levels: _levels,
              customLevels: _levels.join("\n===\n"),
              solutions: JSON.parse(localStorage["celau-solutions"] || "{}"),
          };
          this.preview = false;
      }
      playLevel(config) {
          this.setState({ game: new Game(config) });
          localStorage["celau-last-played"] = this.state.levels.indexOf(config);
      }
      render(props, { game, showLevels, showCustom, customLevels, solutions }) {
          return (h("div", null,
              h("h1", null, "Cellular: Automata"),
              h("button", { class: "top-left-levels", onClick: () => this.showLevels() }, ">>"),
              h("div", { class: "levels" + (showLevels ? " active" : "") },
                  h("button", { onClick: () => this.showLevels() }, "<<"),
                  showCustom ? (h("div", null,
                      h("textarea", { onInput: (e) => this.onCustomChange(e) }, customLevels),
                      h("button", { class: "extreme", style: "width:96%", onClick: () => this.applyCustom() }, "Apply"))) : (this.state.levels.map((level, i) => (h("button", { onClick: () => {
                          this.playLevel(level);
                          this.showLevels();
                      } },
                      i,
                      ".\u00A0",
                      solutions[level]
                          ? "Solved: " + solutions[level].join(" > ")
                          : Game.parseConfig(level)[0],
                      h("div", { class: "preview" }, Game.parseConfig(level)[1]
                          .replace(/\./g, " ")
                          .replace(/#/g, "■")))))),
                  h("button", { onClick: () => this.toggleCustom() }, showCustom ? "Cancel" : "Customize levels")),
              h("div", { class: "status" }, game.automata.isAlive() ? (!this.state.game.hasButtonsLeft() ? (h("div", null,
                  "Success.\u00A0",
                  this.levelInd() == this.state.levels.length - 1 ? ("This is the last level") : (h("button", { class: "extreme", onClick: () => this.nextLevel() }, "Next Level")))) : ("")) : (h("div", null,
                  "Failure. All cells are dead.",
                  h("button", { class: "extreme", onClick: () => this.restartLevel() }, "Restart")))),
              h("div", { class: "board" }, this.renderFragment()),
              h("div", { class: "buttons" }, Object.keys(game.buttons).map((rule) => (h("div", { style: "height:50px" },
                  h("button", { class: "extreme card", style: "height:50px", disabled: !game.buttons[rule], onClick: () => this.pressButton(rule), onMouseOver: () => {
                          this.preview = true;
                          this.predict(rule);
                      }, onMouseOut: () => {
                          this.preview = false;
                          this.predict(null);
                      } },
                      rule +
                          (game.buttons[rule] > 1 ? "*" + game.buttons[rule] : ""),
                      h("div", { class: "rule-preview" }, Automata.parseRules(rule).map(line => h("div", null, Array.from(line).map(c => c ? "■" : "□"))))))))),
              h("div", { class: "menu" },
                  h("button", { style: "z-index:10", onClick: () => this.showLevels() }, "Levels"),
                  h("button", { onClick: () => this.showHelp() }, "Instructions"),
                  h("button", { style: game.canUndo() ? "" : "visibility:hidden", onMouseOver: () => {
                          this.preview = true;
                          this.predict("undo");
                      }, onMouseOut: () => {
                          this.preview = false;
                          this.predict(null);
                      }, onClick: () => this.undo() }, "Undo")),
              h("div", { style: this.state.instructionsVisible ? "" : "display:none", class: "instructions" },
                  lang.instructions,
                  h("button", { onClick: () => this.showHelp() }, "OK"))));
      }
      pressButton(rule) {
          let game = this.state.game;
          game.play(rule);
          if (game.success()) {
              console.log(game.history.map((record) => record.move));
          }
          this.setState({ game, peek: null });
          if (game.success()) {
              let solutions = this.state.solutions;
              solutions[game.config] = game.history.map((record) => record.move);
              this.setState({ solutions });
              localStorage["celau-solutions"] = JSON.stringify(solutions);
          }
          /*setTimeout(() => {
            if (this.preview) this.predict(rule);
          }, 300);*/
      }
      get automata() {
          return this.state.game.automata;
      }
      renderFragment() {
          let fragment = this.automata.fragment(fragmentRect);
          let prediction = this.automata.bufferFragment(fragmentRect);
          let combined = fragment.map((row, rowi) => row.map((v, coli) => [v, this.state.peek ? prediction[rowi][coli] : v]));
          if (this.props.asString)
              return (h("span", null, combined
                  .map((line) => line.map(([cur, next]) => "□-+■"[cur + next * 2]).join(""))
                  .join("\n")));
          else {
              return (h("table", { class: "grid", onClick: (event) => {
                      let e = event.target;
                      if (e.nodeName == "TD" && event.shiftKey) {
                          let [x, y] = [elementIndex(e), elementIndex(e.parentElement)];
                          this.automata.toggle([x + fragmentRect[0], y + fragmentRect[1]]);
                          this.setState({ game: this.state.game });
                      }
                  } }, combined.map((line) => (h("tr", null, line.map(([cur, next]) => (h("td", { class: (cur ? "alive " : "") + (next ? "nextAlive" : "") }))))))));
          }
      }
      predict(rule) {
          if (rule) {
              if (rule == "undo") {
                  this.automata.buffer.set(this.state.game.history[this.state.game.history.length - 1].state);
              }
              else
                  this.automata.peekFragment(rule);
          }
          this.setState({ peek: rule });
      }
      clear() {
          this.automata.clear();
      }
      undo() {
          this.state.game.undo();
          this.setState(this.state);
      }
      showLevels() {
          this.setState({ showLevels: !this.state.showLevels });
      }
      showHelp() {
          this.setState({ instructionsVisible: !this.state.instructionsVisible });
      }
      toggleCustom() {
          this.setState({ showCustom: !this.state.showCustom });
      }
      levelInd() {
          return this.state.levels.indexOf(this.state.game.config);
      }
      nextLevel() {
          let levelInd = this.levelInd();
          this.playLevel(this.state.levels[levelInd + 1]);
      }
      restartLevel() {
          this.playLevel(this.state.game.config);
      }
      applyCustom() {
          let levels = this.state.customLevels.split("===").map((s) => s.trim());
          let curLevel = this.levelInd();
          this.setState({
              levels,
              showCustom: false,
              showLevels: false,
              game: new Game(levels[curLevel] || levels[0])
          });
      }
      onCustomChange(e) {
          this.setState({ customLevels: e.target.value });
      }
  }

  window.onload = () => {
      H(h(GUI, null), document.body);
  };

}());
//# sourceMappingURL=bundle.js.map
