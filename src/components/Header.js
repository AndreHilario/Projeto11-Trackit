import styled from "styled-components";
import useAuthTo from "../context/useAuthTo";
import HeaderLogo from "../assets/HeaderLogo.png";

export default function Header() {

    const { auth } = useAuthTo();

    return (
        <HeaderContainer  data-test="header">
            <HeaderContent>
                <img src={HeaderLogo} alt="Logo do cabeçalho" />
                <img src={auth.profileImage} alt="imagem de perfil" />
            </HeaderContent>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;

    z-index: 2;
`;

export const HeaderContent = styled.div`
    width: 97px;
    height: 49px;
    img:nth-child(1) {
        position: absolute;
        left: 18px;
        top: 16px;
    }
    img:nth-child(2) {
        width: 51px;
        height: 51px;
        border-radius: 99px;

        position: absolute;
        right: 10px;
    }
` 