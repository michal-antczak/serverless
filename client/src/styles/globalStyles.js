import React from "react";
import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";
import respond from './respond'

export default function GlobalStyles() {
    return <StylesConatiner />;
}

const StylesConatiner = createGlobalStyle`
  @keyframes shine{
    0% {
      background-position: right;    
    }
    100%{
      background-position: left;
    }
  }
  @keyframes appearFromRight{
    0% {
      transform: translateX(100%);   
    }
    100%{
      transform: translateX(0);   
    }
  }
  *,
  *::after,
  *::before{
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      line-height: inherit;
      ::-moz-scrollbar-width: none;
      font-family: inherit;
      
      
  }
  ::-webkit-scrollbar{display: none;}
  html{
      font-size: 50%;
      box-sizing: border-box;
      font-family: ${fonts.para};
      line-height: 1.4;
      ${() => respond("xs", `font-size:30%;`)}
      ${() => respond("l", `font-size:55%;`)}     
      ${() => respond("xxl", `font-size:62.5%;`)}
      ${() => respond("tv", `font-size:100%;`)}
      ${() => respond("m", "line-height: 1.6;")};
  }
  
  body{
      overflow-x: hidden;
      background-color: #ddd;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: ${fonts.heading};
  }
  a{
      text-decoration: none;
      color:inherit;
  }
  button{
      cursor: pointer;
      &:active,:focus{
          outline: none;
      }
  }
  button, input, textarea{
      border: none;
  }
  input, textarea{
      &:active, :focus{
        outline: none;
        box-shadow: 0 0 5px rgba(0,0,0,.3);
      }
      color: #222;
  }
`;