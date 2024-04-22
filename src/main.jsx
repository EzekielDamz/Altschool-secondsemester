import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { RepoContextProvider } from "./Context/RepoContext.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
    <RepoContextProvider>
      <ChakraProvider theme={theme}>
        {/* <ErrorBoundary> */}
        <App />
        {/* </ErrorBoundary> */}
      </ChakraProvider>
    </RepoContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
