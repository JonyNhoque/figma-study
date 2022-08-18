import styled from "styled-components";
import { createGlobalStyle} from "styled-components";

export const colors = {
        primary: '#4640BE',
        accent: `#FFC656`,

        black: `#000000`,
        gray: `#666666`,
        white: `#FFFFFF`,

        primaryLight: `#DBD9FF`,
};

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;