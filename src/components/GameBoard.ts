class GameBoard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const grid = 10; 
    let cells = "";
    for (let i = 0; i < grid * grid; i++) {
      cells += `<div class="cell" data-id="${i}"></div>`;
    }
    this.shadowRoot!.innerHTML = `
      <style>
        .board {
          display: grid;
          grid-template-columns: repeat(${grid}, 20px);
          gap: 2px;
        }
        .cell {
          width: 20px;
          height: 20px;
          background: #eee;
          border: 1px solid #ccc;
          text-align: center;
          line-height: 20px;
          font-weight: bold;
          cursor: pointer;
        }
      </style>
      <section>
        <h2>Tablero de juego</h2>
        <div class="board">${cells}</div>
      </section>
    `;
  }
}
customElements.define("game-board", GameBoard);
