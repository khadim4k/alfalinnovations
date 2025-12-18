import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
// The following change ensures the root element and the App fill the entire screen height, preventing the white flash on mobile overscroll.
document.documentElement.classList.add('h-full');
document.body.classList.add('h-full');
document.getElementById('root')?.classList.add('h-full');
