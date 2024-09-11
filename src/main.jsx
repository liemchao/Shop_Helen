import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
import { ContextProvider } from "./Components/CartComponents/contexts/cartcontext";
// import { CartContextProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        {/* <CartContextProvider> */}
        <AuthContextProvider>
          <ToastContainer autoClose={2000} />
          <App />
        </AuthContextProvider>
        {/* </CartContextProvider> */}
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
