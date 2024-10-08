import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
createRoot(document.getElementById("root")).render(
  _jsx(ChakraProvider, { children: _jsx(App, {}) })
);
