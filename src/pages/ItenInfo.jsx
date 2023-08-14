import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

export default function ItenInfo() {

    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const BaseURL = import.meta.env.VITE_API_URL
    const [postInfo, setPostInfo] = useState([])

    const location = useLocation();
    const postData = location.state;


    useEffect(() => {
        const promise = axios.get(`${BaseURL}/posts/${postData.id}`)
        promise.then(res => {
            console.log(res.data)
            setPostInfo(res.data)
        })
        promise.catch(err => {
            console.log(err.message)
        })
    }, [])


    return (
        <>
            <HomeContainer>
                <PostContainer>
                    <img src={postInfo.image} alt="" />
                    <h1>{postInfo.name_dog}</h1>
                    <p>{postInfo.description}</p>
                    <div>
                        <h2>Tutor: {postInfo.name}</h2>
                        <h2>Telefone para serviços: {postInfo.phone}</h2>
                    </div>

                </PostContainer>

                <Link to={'/home'}>
                    Voltar
                </Link>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
margin-top: 100px;
padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  background-color: #fff;
  
`

const PostContainer = styled.div`
   
    box-shadow: 2px 4px 6px 4px #0000001A;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;

    img {
    width: 480px;
    height: 430px;
  }
    h1 {
        margin-top: 15px;
        margin-bottom: 15px;
        color: #000;
    }
    div {
        margin-top: 20px;
        height: 60px;
        background-color: #1e5377;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        margin-top: 8px;
        font-weight: 700;
        color: #fff;
        font-size: 20px;
    }

`