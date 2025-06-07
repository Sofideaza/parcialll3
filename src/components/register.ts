import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

class Register extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addListeners();
  }

  addListeners() {
    const button = this.shadowRoot?.querySelector("#registerBtn")!;
    const login = this.shadowRoot?.querySelector("#loginBtn")!;
    const emailInput = this.shadowRoot?.querySelector("input[type='email']") as HTMLInputElement;
    const passwordInput = this.shadowRoot?.querySelector("input[type='password']") as HTMLInputElement;

    button.addEventListener("click", async () => {
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.hash = "#color";
      } catch (error) {
        alert("Error al registrar. Verifica los datos.");
        console.error(error);
      }
    });

    login.addEventListener("click", () => {
      window.location.hash = "#login";
    });
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        section { display: flex; flex-direction: column; gap: 0.5rem; }
        input { padding: 0.5rem; background: #e7f0ff; border: none; }
        button {
          background: #222; color: white; padding: 0.5rem; border: none;
          cursor: pointer;
        }
        #loginBtn {
          background: transparent;
          color: #333;
          text-decoration: underline;
          border: none;
          cursor: pointer;
        }
      </style>
      <section>
        <h2>Registro</h2>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button id="registerBtn">Crear cuenta</button>
        <button id="loginBtn">¿Ya tienes cuenta? Inicia sesión</button>
      </section>
    `;
  }
}

customElements.define("register-screen", Register);