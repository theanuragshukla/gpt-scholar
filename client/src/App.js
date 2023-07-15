import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./Navbar.jsx";

function App() {
  const theme = extendTheme({});
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
