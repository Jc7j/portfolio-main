import { render } from "preact";
import App from "./pages/app.tsx";
import "./styles/index.css";

// biome-ignore lint/style/noNonNullAssertion: Cause i can
render(<App />, document.getElementById("app")!);
