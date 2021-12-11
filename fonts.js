import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Rebond Grotesque';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Rebond Grotesque Medium.woff') format('woff');
      }

      @font-face {
        font-family: 'Rebond Grotesque';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./fonts/Rebond Grotesque Semibold.woff') format('woff');
      }

      @font-face {
        font-family: 'Rebond Grotesque';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('./fonts/Rebond Grotesque Bold.woff') format('woff');
      }
      `}
  />
);

export default Fonts;
