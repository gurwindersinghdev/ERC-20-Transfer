// theme.ts

import { extendTheme } from "@chakra-ui/react";

// Add your color mode config
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
});

export default theme;
