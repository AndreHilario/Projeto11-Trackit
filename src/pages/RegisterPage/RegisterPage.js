import { RegisterContainer, LoginLink } from "./styled";
import logo from "../../assets/logo.png";
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

export default function RegisterPage() {

    return (
        <RegisterContainer>
            <img src={logo} alt="Logo do app" />
            <RegisterForm />
            <Link to={"/"} data-test="login-link">
                <LoginLink>Já tem uma conta? Faça login!</LoginLink>
            </Link>
        </RegisterContainer>
    )
}