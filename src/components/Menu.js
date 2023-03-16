import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate();

    return (
        <MenuContainer>
            <Link to={"/habitos"}>
                <p>Hábitos</p>
            </Link>
            <ProgressContainer onClick={() => navigate("/hoje")}>
                <CircularProgressbar
                    value={100}
                    text="Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#FFFFFF",
                        pathColor: "#FFFFFF",
                        textSize: 18,
                        trailColor: "transparent",
                    })} />
            </ProgressContainer>
            <Link to={"/historico"}>
                <p>Histórico</p>
            </Link>
        </MenuContainer>
    )
}

const MenuContainer = styled.footer`
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
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
        margin: 0 36px;
    }
    a {
        text-decoration: none;
    }
`;

const ProgressContainer = styled.span`
    width: 91px; 
    height: 91px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

`

