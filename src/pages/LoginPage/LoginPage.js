import { LoginContainer, RegisterLink } from "./styled";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <LoginContainer>
            <img src={logo} alt="Logo do app" />
            <LoginForm />
            <Link to={"/cadastro"}>
                <RegisterLink>Não tem uma conta? Cadastre-se!</RegisterLink>
            </Link>

        </LoginContainer>
    );
}