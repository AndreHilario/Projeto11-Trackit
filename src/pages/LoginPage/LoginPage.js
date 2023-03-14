import { ButtonLogin, FormLoginContainer, LoginContainer, RegisterLink } from "./styled";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <LoginContainer>
            <img src={logo} alt="Logo do app" />
            <FormLoginContainer>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
            </FormLoginContainer>
            <ButtonLogin>Entrar</ButtonLogin>
            <Link to={"/cadastro"}>
                <RegisterLink>Não tem uma conta? Cadastre-se!</RegisterLink>
            </Link>

        </LoginContainer>
    );
}