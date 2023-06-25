import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: 400;
 
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --color-bg: #6a040f;
  --color-bg-secondary: #f8f9fa;

  --color-black-rgba: 000, 000, 000;
  --color-black: #000000;

  --color-white-rgba: 255, 255, 255;
  --color-white: #FFFFFF;
  
  
  --color-gray: ${(props) => props.theme.colors.gray};
  --color-gray-secondary:${(props) => props.theme.colors.graySecondary};
  
  --color-blue-rgba: 025, 047, 079;
  --color-light-blue: #1E5BB4;
  --color-blue: #192F4F;

  --color-red-rgba:   194, 034, 000;
  --color-light-red:   #f94721;
  --color-red:   #c22200;
 
  --color-green-rgba: 034, 158, 003;
  --color-light-green: #229e03;
  --color-green: #009879;

  --color-yellow-rgba: 228, 243, 010;
  --color-light-yellow: #e4f30a

}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
#root{
  width: 100%;
  height: 100vh;
}
a {
  color: ${(props) => props.theme.colors.text};
  text-decoration: inherit;
}


body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 100wh;
  min-height: 100vh;

}
button{
  border: none;
  background: transparent;
  color:${(props) => props.theme.colors.text};
}

button:focus,
button:focus-visible {
  outline: 0rem;
}
svg{
    color: ${(props) => props.theme.colors.text};
    fill: ${(props) => props.theme.colors.text};
  }

input{
  color: ${(props) => props.theme.colors.text};
  background: transparent;
  outline: none;
  box-sizing: border-box
}
ul, li{
  list-style-type: none;
}

`;

export default GlobalStyle;
