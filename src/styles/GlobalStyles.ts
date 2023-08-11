import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 16px;
      margin: 0;
      padding: 0;
   }
   *,
   *:before,
   *:after {
      box-sizing: inherit;
   }
   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      font-family: ${(props) => props.theme.fonts.body};
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      margin: 0;
      padding: 0;
   }
   p {
      margin: 0;
      padding: 0;
   }
   ul {
      margin: 0;
      padding: 0;
   }
   li {
      margin: 0;
      padding: 0;
   }
   nav {
      margin: 0;
      padding: 0;
   }
   a {
      text-decoration: none;
      color: inherit;
   }
   button {
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
   }
   input {
      border: none;
      outline: none;
   }
   textarea {
      border: none;
      outline: none;
   }
   select {
      border: none;
      outline: none;
   }
   option {
      border: none;
      outline: none;
   }
   img {
      display: block;
      width: 100%;
      height: 100%;
   }
   svg {
      display: block;
      width: 100%;
      height: 100%;
   }
`;
