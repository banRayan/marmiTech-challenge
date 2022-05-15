import { createGlobalStyle } from "styled-components";
import { FONTS } from "./theme";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${FONTS.MAIN};
    }
`;

export default GlobalStyle;