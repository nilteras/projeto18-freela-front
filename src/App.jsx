import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'
import ItenInfo from './pages/ItenInfo'
import ManagePost from './pages/ManagePost'
import AddPost from './pages/AddPost'


function App() {


  return (
    <PagesContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/post/:id' element={<ItenInfo />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit' element={<ManagePost />} />
      </Routes>
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
