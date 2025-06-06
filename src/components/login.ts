class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>
        section { 
          display: flex; 
          flex-direction: column; 
          gap: 0.5rem;
        }
        input { 
          padding: 0.5rem; 
        }
        button { 
          background: #222; 
          color: white; 
          padding: 0.5rem; 
          border: none; 
          cursor: pointer; 
          }
      </style>
      <section>
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Contraseña" />
        <button>Ingresar</button>
      </section>
    `;
  }
}

customElements.define("login-screen", Login);