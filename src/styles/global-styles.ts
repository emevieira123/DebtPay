import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
  --grey-900: #313030;
  --grey-700: #383838;
  --grey-500: #4A4A4A;
  --grey-300: #888888;
  --purple: #8B21DF;
  --green: #22BF1F;
  --white: #FFFFFF;
}

.light-mode:root{
  --white: #FFFFFF;
  --white-200: #EFECEC;
  --grey-900: #313030;
  --purple: #8B21DF;
  --green: #22BF1F;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: var(--grey-900);
    color: var(--white);
  }

  body .light-mode {
    background: var(--white);
    color: var(--grey-900);
  }

  h1, h2, h3, h4, h5, h6, span, strong, b, a, label {
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
