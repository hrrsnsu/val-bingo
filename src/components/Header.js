import styled from "styled-components";
import React from "react";
import logo from "../logo/val_logo.svg"

const Header = () => {
    return ( 
        <HeaderContainer>
            <ValLogo src={logo}/>
            <Title>Ralph Bingo</Title>
            <ValLogo src={logo}/>

        </HeaderContainer>
     );
}
 
export default Header;

const HeaderContainer = styled.div`
    margin: 10px;
    border-radius: 15px 15px 0px 0px;
    border-bottom: 5px solid black;
    display: flex;
    background: #FD4556;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: black;
`;

const ValLogo = styled.img`
    width: 100px;
    height: 50px;
`;