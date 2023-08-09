import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'

export default function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const BaseURL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()

    function loginUser(e) {
        e.preventDefault()
        const body = {
            email,
            password
        }
        console.log(body)

      const promise = axios.post(`${BaseURL}/signin`, body)

        promise.then(res => {
            console.log(res.data)
            navigate("/home")
        })
        promise.catch(err => {
            alert(err.response.data)
            setEmail("")
            setSenha("")
        })


    }

    return (
        <>
            <SingInContainer>
                <form onSubmit={loginUser}>
                    <input
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit">
                        Entrar
                    </button>
                </form>

                <Link to={'/signup'}>
                    Primeira vez? Cadastre-se!
                </Link>
            </SingInContainer>
        </>
    )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
