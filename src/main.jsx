import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

import { router } from "./router";
// no es necesario colocar './router/index.jsx' por ser la raiz y se llama automaticamente

import { RouterProvider } from "react-router-dom";
// para activar esto, necesitamos envolver toda la aplicacion en un proveedor
// el proveedor permite que ese props se pase a la configuracion de las paginas
// <App /> se reemplaza por <RouterProvider />
// eliminamos el archivo App.jsx porque no se requiere el archivo base
// porque todo estara dentro las paginas

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
