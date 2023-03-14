import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";

export default function Menu() {
    return (
        <MenuContainer>
            <p>Hábitos</p>
            <CircularProgressbar>Hoje</CircularProgressbar>
            <p>Histórico</p>
        </MenuContainer>
    )
}

const MenuContainer = styled.div `
    background-color: #FFFFFF;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    position: fixed;
    bottom: 0;
    p {
        font-size: 18px;
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        margin-left: 36px;
        margin-right: 26px;
    }
`;

