import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addListeners();
  }

  addListeners() {
    const button = this.shadowRoot?.querySelector("#loginBtn");
    const register = this.shadowRoot?.querySelector("#registerBtn");
    const emailInput = this.shadowRoot?.querySelector("input[type='email']");
    const passwordInput = this.shadowRoot?.querySelector("input[type='password']");

    if (
      !(button instanceof HTMLButtonElement) ||
      !(register instanceof HTMLButtonElement) ||
      !(emailInput instanceof HTMLInputElement) ||
      !(passwordInput instanceof HTMLInputElement)
    ) {
      return;
    }

    button.addEventListener("click", async () => {
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.hash = "#color";
      } catch (error) {
        alert("Login incorrecto o usuario no registrado.");
        console.error(error);
      }
    });

    register.addEventListener("click", () => {
      window.location.hash = "#register";
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
        #registerBtn {
          background: transparent;
          color: #333;
          text-decoration: underline;
        }
      </style>
      <section>
        <h2>Iniciar sesión</h2>
        <input type="email" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <button id="loginBtn">Ingresar</button>
        <button id="registerBtn">¿No tienes cuenta? Regístrate</button>
      </section>
    `;
  }
}

customElements.define("login-screen", Login);
