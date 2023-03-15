import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    input {
            background: ${(props) => props.disabled ? "#D2D2D2" : "#FFFFFF"};
            border: 1px solid #D4D4D4;
            border-radius: 5px;
            height: 45px;
            width: 283px;
            margin-bottom: 6px;
            padding: 0 10px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            line-height: 25px;
            display: flex;
            align-items: center;
            &::placeholder{
		        color: #DBDBDB;
	        }
    }
`;
export default GlobalStyle;