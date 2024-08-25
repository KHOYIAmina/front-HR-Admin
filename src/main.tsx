import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/routesComponent";
createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
);
