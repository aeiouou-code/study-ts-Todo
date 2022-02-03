import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

body{
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor}
}

button{
  display: flex;
  cursor: pointer;
  outline: none;
  border-radius: 3px;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
};

input{
  display: flex;
  outline: none;
  padding-left: 10px;
}

a{
  text-decoration : none;
  color: inherit;
}

*{
  box-sizing: border-box;
}
`;

export default GlobalStyle;
