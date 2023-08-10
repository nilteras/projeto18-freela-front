import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components'
import { TokenContext } from "../context/TokenContext"

export default function SignUp() {

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const BaseURL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    const {token} = useContext(TokenContext)

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
       

        if(body.cpf.length < 11 || body.cpf.length > 11){
            return alert("CPF deve conter 11 digitos");
        }

        if(body.phone.length < 10 || body.cpf.length > 11){
            return alert("Insira um número de telefone válido");
        }

        if(body.password !== body.confirmPassword){
            return alert("As senhas devem ser iguais");
        }

        const promise = axios.post(`${BaseURL}/signup`, body)
        console.log(promise)

        promise.then(res => {
            console.log(res)
            navigate("/")
        })
        promise.catch(err => {
            console.log(err)
            alert(err.response.data)
            setName("")
            setCpf("")
            setPhone("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        })
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
