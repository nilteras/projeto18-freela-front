import { useState } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

export default function SignUp() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function createUser(e) {
        e.preventDefault()
        const body = {
            name,
            cpf,
            phone,
            email,
            password,
            confirmPassword
        }
        console.log(body)
    }

    return (
        <>
            <SingUpContainer>
                <form onSubmit={createUser}>

                    <input
                        name="name"
                        placeholder="Nome"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        name="cpf"
                        placeholder="CPF"
                        type="text"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                        required
                    />

                    <input
                        name="phone"
                        placeholder="Número de Telefone"
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                    <input
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input

                        name="password"
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required


                    />
                    <input

                        name="confirmPassword"
                        placeholder="Confirme a senha"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Cadastrar</button>
                </form>

                <Link to={"/"}>
                    Já tem uma conta? Entre agora!
                </Link>
            </SingUpContainer>
        </>
    )
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
