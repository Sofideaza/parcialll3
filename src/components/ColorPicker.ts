class ColorPicker extends HTMLElement {
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
        input { 
          width: 100px; 
          height: 50px; 
        }
      </style>
      <section>
        <h2>Elige tu color</h2>
        <input type="color" />
      </section>
    `;
  }
}
customElements.define("color-picker", ColorPicker);