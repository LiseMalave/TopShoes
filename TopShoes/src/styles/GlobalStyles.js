import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(82deg,#ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg,#3b3022, #3b2329);
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    html {
        scroll-behavior: smooth;
        border: 1px solid red;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        overflow-x:hidden;
        width: 100%;
        border: 1px solid red;
    }

    a {
        text-decoration: none;
        color: white;
    }
   
    li {
        list-style: none;
    }
    
    
    button:hover{
        background-color: pink;
    }
`;