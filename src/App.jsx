import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import ItenInfo from './pages/ItenInfo'
import ManagePost from './pages/ManagePost'
import AddPost from './pages/AddPost'
import { useState } from 'react'
import { TokenContext } from './context/TokenContext'
import { UserContext } from './context/UserContext'
import { Header } from './components/Header'


function App() {

  const [user, setUser] = useState({})
  const [token, setToken] = useState({})

  return (
    <PagesContainer>
      <BrowserRouter>
      <Header />
        <TokenContext.Provider value={{ token, setToken }}>
          <UserContext.Provider value={{user, setUser}}>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/post/:id' element={<ItenInfo />} />
              <Route path='/post-add' element={<AddPost />} />
              <Route path='/posts/edit/:id' element={<ManagePost />} />
            </Routes>
          </UserContext.Provider>
        </TokenContext.Provider>
      </BrowserRouter>
    </PagesContainer>
  )
}

export default App

const PagesContainer = styled.main`
  background-color: lightgray;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`
