import React from 'react'
import styled, { keyframes } from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};


`

const Container = styled.div`
width: 75%;
min-height: 85vh;
margin:0 auto;
${'' /* background-color: lightblue; */}
display: flex;
justify-content: center;
align-items:center;
`
const Box = styled.div`
width:50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`
const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;

img{
  width: 100%;
  height: auto;
  animation: ${rotate} 6s linear infinite reverse;
}
`

const Cricle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
dont-size: ${props => props.theme.fontxl};


`


const Home = () => {
  return (
    <Section id = "home">
      <Container>
      <Box><TypeWriterText/></Box>
      <Box><CoverVideo/></Box>

      <Round>
      <Cricle>
        &#x2193;
      </Cricle>
        <img src={RoundTextBlack} alt="NFT"/>
      </Round>
      </Container>
    </Section>
  )
}

export default Home