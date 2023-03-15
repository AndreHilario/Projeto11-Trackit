import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_API } from "../../constants/urls";
import { ButtonLogin, FormLoginContainer, DotsLogin } from "./styled";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../../constants/AuthContext";


export default function LoginForm() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [disabled, setDisabled] = useState(false);
    const [token, setToken] = useState("");

    const { email, password } = form;

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
                console.log(res.data.token)
                setToken(res.data.token)
                navigate("/hoje")
            })
            .catch((err) => {
                setDisabled(false);
                alert(err.reponse.data.message)
            })
    }

    console.log(form)

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            <FormLoginContainer onSubmit={sendLogin}>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleLogin}
                    required
                    disabled={disabled}
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleLogin}
                    required
                    disabled={disabled}
                />

                <ButtonLogin type="submit" disabled={disabled}>
                    {!disabled ? "Entrar" : <DotsLogin><ThreeDots color="#FFFFFF" /></DotsLogin>}
                </ButtonLogin>

            </FormLoginContainer>
        </AuthContext.Provider>
    )
}