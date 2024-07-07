import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
        --orange-bg: #2f2618;
        --orange: #ff9d01;
        --magenta: #ff005c;
        --gray-bg: #2b2b2c;
        --btn-gradient: linear-gradient(82deg,#ffa100, #fb103d);
        --btn-gradient-secondary: linear-gradient(140deg,#3b3022, #3b2329);
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: white;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color: black;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: black;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
    

    button:hover{
        background-color: #fff;
    }
`;