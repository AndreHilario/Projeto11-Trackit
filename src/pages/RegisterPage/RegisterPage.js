import { ButtonRegister, FormRegisterContainer, RegisterContainer, LoginLink } from "./styled";
import logo from "../../assets/Group 8.png";

export default function RegisterPage() {
    return (
        <RegisterContainer>
            <img src={logo} alt="Logo do app" />
            <FormRegisterContainer>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
            </FormRegisterContainer>
            <ButtonRegister>Cadastrar</ButtonRegister>
            <LoginLink>Já tem uma conta? Faça login!</LoginLink>
        </RegisterContainer>
    )
}