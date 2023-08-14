import styled from 'styled-components'
import logo from './../../public/assets/logodogstar.png'

export function Header() {
    return (
        <>
            <NavContainer>
                <img src={logo} alt=''/>
            </NavContainer>

        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  #48B3FE;
    position: fixed;
    top: 0;

`