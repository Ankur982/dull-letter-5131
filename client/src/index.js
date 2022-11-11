import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { UserAuthContextProvider } from "./context/UserAuthcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
        <Auth0Provider
    domain="dev-ey4qusjob7k12e4a.us.auth0.com"
    clientId="SWBuRAcMMvXlSMAuqf2l3U65XLPhSVXa"
    redirectUri={window.location.origin}>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider> 
        </Auth0Provider>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>

     

   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
