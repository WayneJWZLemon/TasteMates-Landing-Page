import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
function App() {
  return _jsxs(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    py: 10,
    px: 6,
    children: [
      _jsx(Heading, {
        as: "h1",
        size: "2xl",
        mt: 6,
        mb: 2,
        children: "Welcome to the exciting world of TasteMates!",
      }),
      _jsx(Text, {
        color: "gray.500",
        mb: 6,
        children: "Stay tuned for our upcoming release.",
      }),
      _jsx(Button, {
        colorScheme: "teal",
        size: "lg",
        disabled: true,
        children: "Get Started",
      }),
    ],
  });
}
export default App;
