import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import GlobalStyle from "../../style/GlobalStyle";
import { FormRegisterContainer, ButtonRegister, Dots } from "./styled";
import useSignUp from "../../hooks/api/useSignUp";

export default function RegisterForm() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",
    });
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const { signUp } = useSignUp();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function sendInfoProfile(e) {
        e.preventDefault();

        setDisabled(true);

        try {
            await signUp(form.email, form.name, form.image, form.password);
            navigate('/');
        } catch (error) {
            setDisabled(false);
            alert("Não foi possível realizar o cadastro!");
        }
    }

    return (
        <FormRegisterContainer onSubmit={sendInfoProfile}>

            <input
                data-test="email-input"
                placeholder="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                required
                disabled={disabled}
            />

            <input
                data-test="password-input"
                placeholder="senha"
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                required
                disabled={disabled}
            />

            <input
                data-test="user-name-input"
                placeholder="nome"
                type="text"
                name="name"
                value={form.name}
                onChange={handleForm}
                required
                disabled={disabled}
            />

            <input
                data-test="user-image-input"
                placeholder="foto"
                type="text"
                name="image"
                value={form.image}
                onChange={handleForm}
                required
                disabled={disabled}
            />

            <ButtonRegister data-test="signup-btn" type="submit" disabled={disabled}>
                {!disabled ? "Cadastrar" : <Dots><ThreeDots color="#FFFFFF" /></Dots>}
            </ButtonRegister>

            <GlobalStyle disabled={disabled} />
        </FormRegisterContainer>
    );
}
