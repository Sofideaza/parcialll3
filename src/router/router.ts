export function router(app: HTMLElement) {
  const path = window.location.hash.slice(1) || "login";
  render(path);

  window.addEventListener("hashchange", () => {
    const newPath = window.location.hash.slice(1);
    render(newPath);
  });

  function render(route: string) {
    switch (route) {
      case "login":
        app.innerHTML = `<login-screen></login-screen>`;
        break;
      case "register":
        app.innerHTML = `<register-screen></register-screen>`;
        break;
      case "color":
        app.innerHTML = `<color-picker></color-picker>`;
        break;
      case "letter":
        app.innerHTML = `<letter-picker></letter-picker>`;
        break;
      case "name":
        app.innerHTML = `<name-picker></name-picker>`;
        break;
      case "board":
        app.innerHTML = `<game-board></game-board>`;
        break;
      default:
        app.innerHTML = `<login-screen></login-screen>`;
    }
  }
}
