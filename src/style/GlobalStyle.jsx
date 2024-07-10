import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    }

    body {
    margin: 0;

    font-family: 'Montserrat', sans-serif;

    font-size: 16px; /* Базовый размер шрифта */
    line-height: 1.5; 

    z-index: 1;

    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.background};

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    color: ${p => p.theme.colors.title};
    }

    p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;

    color: ${p => p.theme.colors.text};
    }
    
    ul,
    ol {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
    
    .ReactModal__Body--open {
        overflow: hidden;
    }

`;
