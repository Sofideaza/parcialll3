class NamePicker extends HTMLElement {
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
          padding: 0.5rem; 
        }
      </style>
      <section>
        <h2>Ingresa tu nombre</h2>
        <input type="text" placeholder="Tu nombre" />
      </section>
    `;
  }
}
customElements.define("name-picker", NamePicker);
