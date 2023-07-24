import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HashRouter } from "react-router-dom";
import Router from "./app/Router.jsx";
import "./styles/global.scss";

function App() {
  const theme = extendTheme({
    fonts: {
      html: "Ubuntu, sans-serif",
      heading: "Ubuntu, sans-serif",
    },
    styles: {
      global: () => ({
        body: {
          bg: "",
        },
      }),
    },
    colors: {
      nord0: "#2e3440",
      nord1: "#3b4252",
      nord2: "#434c5e",
      nord3: "#4c566a",
      nord4: "#d8dee9",
      nord5: "#e5e9f0",
      nord6: "#eceff4",
      nord7: "#8fbcbb",
      nord8: "#88c0d0",
      nord9: "#81a1c1",
      nord10: "#5e81ac",
      nord11: "#bf616a",
      nord12: "#d08770",
      nord13: "#ebcb8b",
      nord14: "#a3be8c",
      nord15: "#b48ead",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Router />
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
