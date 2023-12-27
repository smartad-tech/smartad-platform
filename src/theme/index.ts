import * as components from "./components";
import * as foundations from "./foundations";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorModel: true,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  config,
  colors: {
    brand: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    bg: {
      100: "#FAF8F1",
      200: "#ced3c9"
    },
  },
});
