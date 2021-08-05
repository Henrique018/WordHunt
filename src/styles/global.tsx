import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
		padding: 0;
		box-sizing:border-box;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
		::after,
		::before {
			box-sizing: inherit;
		}
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }
`;
