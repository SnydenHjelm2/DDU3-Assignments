
class E {
  static all = []
  static fromId (id) { return E.all.find(x => x.html.id == id); }
  constructor (klass, tag = "div", parent = null) {
    this.html = document.createElement(tag);
    if (parent) parent.appendChild(this.html);
    if (klass) this.html.classList.add(klass);
  }
  append (name, element) {
    this.html.append(element.html);
    this[name] = element;
  }
}

class Game extends E {
  static active = true;
  static nMoves = 18;
  static end () {
    Game.active = false;
  }
  constructor (grid) {
    super("", "div", document.querySelector("main"));

    // Title
    this.append("title", new E("", "h1"));
    this.title.html.textContent = "Color Eater";

    // Selector för "banorna" (grids)
    this.append("selector", new E("", "select"));
    for (let grid of Grid.grids) {
      this.selector.html.innerHTML += `<option value="${grid.sequence}">${grid.name}</option>`;
    }

    this.selector.html.addEventListener("change", e => {
      this.grid.fillGrid({
        name: e.target.selectedOptions[0].textContent,
        sequence: e.target.value
      });
    });

    // Player info
    this.append("playerInfo", new PlayerInfo());
    Game.playerInfo = this.playerInfo;

    // Banan (griden)
    this.append("grid", new Grid(grid));
  }
}

class Grid extends E {
  static grids = [
    {
      name: "Pippi",
      sequence: "022864684444888442682486828648868668",
    },
    {
      name: "Ronja",
      sequence: "086884628242682862268484822288644842",
    },
    {
      name: "Madicken",
      sequence: "024844288266682868688884288884268646",
    },
    {
      name: "Karlsson",
      sequence: "044268642684426886468226886642228248",
    },
    {
      name: "Emil",
      sequence: "066824846864888684684668628466846264",
    },
  ]
  static nCols = 6
  static nRows = 6
  static grid;
  constructor (grid) {
    super("grid");
    this.html.setAttribute("tabindex", 0); // so that keydown can be triggered on it
    
    this.html.addEventListener("keydown", e => {      
      if (!Game.active) return;

      switch (e.key) {
        case "ArrowUp":
          this.token.moveUp();
          break;
        case "ArrowDown":
          this.token.moveDown();
          break;
        case "ArrowLeft":
          this.token.moveLeft();
          break;
        case "ArrowRight":
          this.token.moveRight();
          break;
      }
      Game.playerInfo.moves--;

      // Fråga:
      //    Notera att om e.key inkluderar strängen "Arrow"
      //    så finns riktningen i slutet av e.key (Up, Down, etc)
      //    Det är samma riktning som behövs för att anropa rätt metod av this.token.
      //    Hur skulle man kunna skriva koden ovan så att vi anropar metoden såhär:
      //    this.token[`move${direction}`]();

    });

    // Fill
    this.fillGrid(grid);

    // htmlElement.focus() "ger fokus" till htmlElement.
    // (de används här för att eventet keydown ska triggas på gridens html)
    // Frågor:
    // - Vad gör setTimeout?
    // - (Klurig!) Varför behövs den här?
    setTimeout(() => { this.html.focus(); }, 0);
  }
  fillGrid (grid) {
    // Reset cells
    Cell.reset();
   
    // Create Cells
    let counter = 0;
    for (let row = 1; row <= Grid.nRows; row++) {
      for (let col = 1; col <= Grid.nCols; col++) {
        const number = grid.sequence[counter++];
        const cellName = `cell_${col}_${row}`;
        this.append(cellName, new Cell(col, row, number));
      }
    }

    // Player token
    this.append("token", new Token());   
    
    // Reset after game over
    // this.html.style.opacity = 1;
    // Game.active = true;
    // Game.playerInfo.points = 0;
    // Game.playerInfo.moves = Game.nMoves;
  }
}

class PlayerInfo extends E {
  constructor () {
    super();
    this.append("pointBox", new E());
    this.append("moveBox", new E());
  }
  get points () { return this._points; }
  set points (value) {
    this._points = value;
    this.pointBox.html.textContent = `Points: ${this.points}`;
  }
  get moves () { return this._moves; }
  set moves (value) {
    this._moves = value;    
    this.moveBox.html.textContent = `Moves left: ${this.moves}`;
    if (value == 0) Game.end();
  }
}

class Cell extends E {
  static all = []
  static reset () {
    for (let cell of Cell.all) {
      cell.html.remove();
    }
    Cell.all = [];
  }
  static fromCoords (col, row) {
    return Cell.all.find(x => x.col == col && x.row == row);
  }
  constructor (col, row, number) {
    super();
    Cell.all.push(this);
    this.number = number;  
    this.col = col;
    this.row = row;
    this.html.style.gridColumn = col;
    this.html.style.gridRow = row;
  }
  get number () { return this._number; }
  set number (value) {
    this.html.textContent = value;
    this.html.classList.add(`cell_${value}`);
    this._number = value;
  }
  movedHere () {
    if (this.number == 0) return;
    this.number = 0;
  }
}

class Token extends E {
  constructor () {
    super("token");
    this.row = 1;
    this.col = 1; 
  }
  get col () { return this._col; }
  set col (value) {
    this.html.style.gridColumn = value;
    this._col = value;
    Cell.fromCoords(this.col, this.row).movedHere();
  }
  get row () { return this._row; }
  set row (value) {
    this.html.style.gridRow = value;
    this._row = value;
    if (!this.col) return; // Fråga: Varför behövs denna rad (testa utan för att se vad som händer då)?
    Cell.fromCoords(this.col, this.row).movedHere();
  }
  moveUp () { this.row--; }
  moveDown () { this.row++; }
  moveLeft () { this.col--; }
  moveRight () { this.col++; }
}


new Game(Grid.grids[0]);
