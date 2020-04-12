import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    font-family: 'Roboto', sans-serif;
    scroll-behavior:smooth;
}`;
