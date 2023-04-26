import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.WHITE};
     }

     body, input, button, textarea{
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`