import lang from "./lang";

import {
  h,
  render,
  FunctionalComponent,
  Component,
  createContext,
} from "preact";
import Game from "./Game";

const fragmentRect = [30, 30, 40, 40];

/*const modes = [
  "B3/S23 Life",
  "B3/S023",
  "B1/S",
  "B2/S",
  "B3/S",
  "B4/S",
  "B5/S",
  "B/S0",
  "B/S1",
  "B/S2",
  "B/S3",
  "B/S4",
  "B/S5",
  "B1/S1",
  "B2/S2",
  "B3/S3",
  "B4/S4",
  "B5/S5",
  "B25678/S5678",
  "B3/S45678",
  "B3678/S235678",
  "B36/S125",
  "B34/S456",
  "B3678/S34678",
  "B1357/S1357 Replicator",
  "B/S",
];*/

type GUIState = {
  game: Game;
  peek?: string;
  showLevels: boolean;
  showCustom: boolean;
  customLevels: string;
  instructionsVisible: boolean;
  levels: string[];
  solutions: { [level: string]: string[] };
};

function elementIndex(e: HTMLElement) {
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

export default class GUI extends Component<{ asString?: boolean }, GUIState> {
  state = {
    game: new Game(_levels[localStorage["celau-last-played"]] || _levels[0]),
    levels:_levels,
    customLevels: _levels.join("\n===\n"),
    solutions: JSON.parse(localStorage["celau-solutions"] || "{}"),
  } as GUIState;

  preview = false;

  playLevel(config: string) {
    this.setState({ game: new Game(config) });
    localStorage["celau-last-played"] = this.state.levels.indexOf(config)
  }

  render(
    props,
    { game, showLevels, showCustom, customLevels, solutions }: GUIState
  ) {
    return (
      <div>
        <h1>Cellular: Automata</h1>

        <button class="top-left-levels" onClick={() => this.showLevels()}>
          &gt;&gt;
        </button>
        <div class={"levels" + (showLevels ? " active" : "")}>
          <button onClick={() => this.showLevels()}>&lt;&lt;</button>

          {showCustom ? (
            <div>
              <textarea onInput={(e) => this.onCustomChange(e)}>
                {customLevels}
              </textarea>
              <button class="extreme" style="width:96%" onClick={() => this.applyCustom()}>Apply</button>
            </div>
          ) : (
            this.state.levels.map((level, i) => (
              <button
                onClick={() => {                  
                  this.playLevel(level);
                  this.showLevels();
                }}
              >
                {i}.&nbsp;
                {solutions[level]
                  ? "Solved: " + solutions[level].join(" > ")
                  : Game.parseConfig(level)[0]}
                <div class="preview">
                  {Game.parseConfig(level)[1]
                    .replace(/\./g, " ")
                    .replace(/#/g, "■")}
                </div>
              </button>
            ))
          )}
          <button onClick={() => this.toggleCustom()}>{showCustom?"Cancel":"Customize levels"}</button>
        </div>
        <div class="status">
          {game.automata.isAlive() ? (
            !this.state.game.hasButtonsLeft() ? (
              <div>
                Success.&nbsp;
                {this.levelInd() == this.state.levels.length - 1 ? (
                  "This is the last level"
                ) : (
                  <button class="extreme" onClick={() => this.nextLevel()}>
                    Next Level
                  </button>
                )}
              </div>
            ) : (
              ""
            )
          ) : (
            <div>
              Failure. All cells are dead.
              <button class="extreme" onClick={() => this.restartLevel()}>
                Restart
              </button>
            </div>
          )}
        </div>
        <div class="board">{this.renderFragment()}</div>
        <div class="buttons">
          {Object.keys(game.buttons).map((rule) => (
            <div style="height:30px">
              <button
                class="extreme"
                disabled={!game.buttons[rule]}
                onClick={() => this.pressButton(rule)}
                onMouseOver={() => {
                  this.preview = true;
                  this.predict(rule);
                }}
                onMouseOut={() => {
                  this.preview = false;
                  this.predict(null);
                }}
              >
                {rule +
                  (game.buttons[rule] > 1 ? "*" + game.buttons[rule] : "")}
              </button>
            </div>
          ))}
        </div>
        <div class="menu">
          <button style="z-index:10" onClick={() => this.showLevels()}>Levels</button>
          <button onClick={() => this.showHelp()}>
            Instructions
          </button>
          <button
            style={game.canUndo() ? "" : "visibility:hidden"}
            onMouseOver={() => {
              this.preview = true;
              this.predict("undo");
            }}
            onMouseOut={() => {
              this.preview = false;
              this.predict(null);
            }}
            onClick={() => this.undo()}
          >
            Undo
          </button>
        </div>
        <div
          style={this.state.instructionsVisible ? "" : "display:none"}
          class="instructions"
        >
          {lang.instructions}
          <button onClick={() => this.showHelp()}>OK</button>
        </div>
      </div>
    );
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
    let combined = fragment.map((row, rowi) =>
      row.map((v, coli) => [v, this.state.peek ? prediction[rowi][coli] : v])
    );
    if (this.props.asString)
      return (
        <span>
          {combined
            .map((line) =>
              line.map(([cur, next]) => "□-+■"[cur + next * 2]).join("")
            )
            .join("\n")}
        </span>
      );
    else {
      return (
        <table
          class="grid"
          onClick={(event) => {
            let e = event.target as HTMLElement;
            if (e.nodeName == "TD" && event.shiftKey) {
              let [x, y] = [elementIndex(e), elementIndex(e.parentElement)];
              this.automata.toggle([x + fragmentRect[0], y + fragmentRect[1]]);
              this.setState({ game: this.state.game });
            }
          }}
        >
          {combined.map((line) => (
            <tr>
              {line.map(([cur, next]) => (
                <td
                  class={(cur ? "alive " : "") + (next ? "nextAlive" : "")}
                ></td>
              ))}
            </tr>
          ))}
        </table>
      );
    }
  }

  predict(rule: string) {
    if (rule) {
      if (rule == "undo") {
        this.automata.buffer.set(
          this.state.game.history[this.state.game.history.length - 1].state
        );
      } else this.automata.peekFragment(rule);
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

  showLevels(): void {
    this.setState({ showLevels: !this.state.showLevels });
  }

  showHelp(): void {
    this.setState({ instructionsVisible: !this.state.instructionsVisible });
  }

  toggleCustom(): void {
    this.setState({ showCustom: !this.state.showCustom });
  }

  levelInd() {
    return this.state.levels.indexOf(this.state.game.config);
  }

  nextLevel(): void {
    let levelInd = this.levelInd();
    this.playLevel(this.state.levels[levelInd + 1]);
  }

  restartLevel(): void {
    this.playLevel(this.state.game.config);
  }

  applyCustom(): void {
    let levels = this.state.customLevels.split("===").map((s) => s.trim());
    let curLevel = this.levelInd()
    this.setState({
      levels ,
      showCustom: false,
      showLevels: false,
      game: new Game(levels[curLevel] || levels[0])
    });
  }

  onCustomChange(e: Event) {
    this.setState({ customLevels: (e.target as HTMLTextAreaElement).value });
  }
}
