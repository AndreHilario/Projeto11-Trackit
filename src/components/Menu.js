import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function Menu() {
    return (
        <MenuContainer>
            <p>Hábitos</p>
        <span>
            <CircularProgressbar
                value={100}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#FFFFFF",
                    pathColor: "#FFFFFF",
                    textSize: 18,
                    pathTransitionDuration: 0.5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                })} />
            </span>
            <p>Histórico</p>
        </MenuContainer>
    )
}

const MenuContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    font-family: 'Lexend Deca', sans-serif;

    position: fixed;
    bottom: 0;
    p {
        font-size: 18px;
        color: #52B6FF;
        margin: 31px auto;
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #52b6ff;
        width: 91px;
        border-radius: 50%;
        margin-bottom: 30px;
  }
`;

