import "./components/Login";
import "./components/Register";
import "./components/ColorPicker";
import "./components/LetterPicker";
import "./components/NamePicker";
import "./components/GameBoard";
import "./router/router";
import "./firebase/firebaseConfig";

import { router } from "./router/router";

const app = document.getElementById("app");
if (app) router(app);