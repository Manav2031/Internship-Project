

import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Button from './Button'

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.body}
`
const NavBar = styled.nav`
display: flex;
${'' /* background-color: orange; */}
justify-content: space-between;
align-items : center;
 background-color: #968df0;
width:75%;
padding: 0 12.5%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`
const Menu = styled.ul`
display: flex;
justify-content:space between;
align-items: center;
list-style:none;
`
const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width:0;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;

}
&:hover::after{
  width:100%;
}

`

const BackgroundContainer = styled.div`
  background-color: orange;
  width: 100%;
`
const HamburgerMenu = styled.span`
  width:  ${props => props.click ? '2rem' : '1.5rem'};;
  height: 2px;
  background: ${props => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${props => (props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)')};

  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em){
    display: flex;
  }

  &::after,
  &::before {
    content: ' ';
    width:  ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    right:  ${props => props.click ? '-2px' : '0'};
    background: ${props => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }
  &::after {
    top: ${props => props.click ? '0.3rem' : '0.5rem'};
    transform: ${props => (props.click ? 'rotate(-40deg)' : 'rotate(0)')};
  }
  &::before {
    bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
        transform: ${props => (props.click ? 'rotate(40deg)' : 'rotate(0)')};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);
  const scrollTo = (id) =>{
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  return (
    <Section id="navigation">
    <NavBar>
    
    <Logo/>
     <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
     </HamburgerMenu>
      <Menu>
        <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
        <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
        <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
        <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
        <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
        <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        
      </Menu>
      <Button text="Get Started" link="https://google.com"/>

      
    </NavBar>
    </Section>
  )
}

export default Navigation