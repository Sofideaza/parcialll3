class Register extends HTMLElement {
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
        section { 
          display: flex; 
          flex-direction: column; 
          gap: 0.5rem; 
        }
      </style>
      <section>
        <h2>Registro</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <button>Registrar</button>
      </section>
    `;
  }
}
customElements.define("register-screen", Register);
