import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    input {
            background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
            border: 1px solid #D5D5D5;
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
            color: #666666;
            &::placeholder{
		        color: #DBDBDB;
	        }
            :focus {
                background: #F0FFFF;
                outline: solid 1.5px #52B6FF;
            } 
    }
    h2 {
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        font-size: 26px;
    }
`;
export default GlobalStyle;