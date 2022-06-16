const { createGlobalStyle } = require("styled-components");

const theme = {
  colors: {
    default: {
      primary: "#2d2a46",
      background: "#0f0e17",
      color: "#fff",
      header: "#fffffe",
      paragraph: "#a7a9be",
    },
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

    body {
        margin: 0;
        color: ${theme.colors.default.color};
        background-color: ${theme.colors.default.background};
        font-family: 'Montserrat', sans-serif;

        &.overflow {
          overflow-y: hidden;
        }
    }

    h1, h2, h3 {
      color: ${theme.colors.default.color};
    }

    p {
      color: ${theme.colors.default.paragraph};
    }
`;

export { GlobalStyle, theme };
