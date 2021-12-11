import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: "#0D3B66",
    pink: "#FFA493",
    orange: "#F95738",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "blue",
      },
    },
  },
  fonts: {
    body: "Rebond Grotesque",
  },
});

export default theme;
