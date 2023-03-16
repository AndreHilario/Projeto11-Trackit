import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../constants/urls";
import { ButtonLogin, FormLoginContainer, DotsLogin } from "./styled";
import { ThreeDots } from "react-loader-spinner";
import useAuthTo from "../../context/useAuthTo";

export default function LoginForm() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);

    const { email, password } = form;
    const { setAuth } = useAuthTo();

    const navigate = useNavigate();

    function handleLogin(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function sendLogin(e) {
        e.preventDefault()

        setDisabled(true);

        axios
            .post(`${URL_API}/auth/login`, form)
            .then((res) => {
                setDisabled(false);
                const getToken = res.data.token;
                const profileImage = res.data.image;
                setAuth({getToken, profileImage})
                navigate("/hoje")
            })
            .catch((err) => {
                setDisabled(false);
                alert("Senha ou usuário inválidos")
            })
    }

    console.log(form)

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

        </FormLoginContainer>
    )
}