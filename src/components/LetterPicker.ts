class LetterPicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        input { width: 50px; 
          text-transform: uppercase; 
          text-align: center; 
          font-size: 1.5rem; 
        }
      </style>
      <section>
        <h2>Elige tu letra</h2>
        <input type="text" maxlength="1" />
      </section>
    `;
  }
}
customElements.define("letter-picker", LetterPicker);
