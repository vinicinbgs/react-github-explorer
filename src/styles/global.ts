import { createGlobalStyle } from 'styled-components';
import backgroundGithub from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #f0f0f5;
    background-image: url(${backgroundGithub});
    background-repeat: no-repeat;
    background-position: 70% top;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 16px sans-serif;
    font-family: 'Roboto', sans-serif;   
  }
  
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  
  button {
    cursor: pointer;
  }
`;
