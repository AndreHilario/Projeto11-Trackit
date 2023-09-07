import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogin, FormLoginContainer, DotsLogin } from "./styled";
import { ThreeDots } from "react-loader-spinner";
import useAuthTo from "../../context/useAuthTo";
import GlobalStyle from "../../style/GlobalStyle";
import useSignIn from "../../hooks/api/useAuth";

export default function LoginForm() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);

    const { email, password } = form;
    const { setAuth } = useAuthTo();
    const { signIn } = useSignIn();

    const navigate = useNavigate();

    function handleLogin(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function sendLogin(e) {
        e.preventDefault()

        setDisabled(true);

        try {
            const res = await signIn(email, password);
            setDisabled(false);
            const getToken = res.token;
            const profileImage = res.image;
            setAuth({ getToken, profileImage });
            navigate("/hoje");
        } catch (error) {
            setDisabled(false);
            alert("Senha ou usuário inválidos");
        }
    }

    return (
        <FormLoginContainer onSubmit={sendLogin}>
            <input
                data-test="email-input"
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={handleLogin}
                required
                disabled={disabled}
            />
            <input
                data-test="password-input"
                placeholder="senha"
                type="password"
                name="password"
                value={password}
                onChange={handleLogin}
                required
                disabled={disabled}
            />

            <ButtonLogin data-test="login-btn" type="submit" disabled={disabled}>
                {!disabled ? "Entrar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}
            </ButtonLogin>
            <GlobalStyle disabled={disabled} />
        </FormLoginContainer>
    );
}