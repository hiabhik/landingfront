import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  
    <Auth0Provider
      domain="dev-o4etxautodub1twi.us.auth0.com"
      clientId="dKaJJl2WAIn1MNak6svmScfMuXqnsU1D"
      authorizationParams={{
        redirect_uri: window.location.origin,}}>
      <App />
    </Auth0Provider>
   
  </>
);
