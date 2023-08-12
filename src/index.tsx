import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <HelmetProvider>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
         </ThemeProvider>
      </HelmetProvider>
   </React.StrictMode>
);
