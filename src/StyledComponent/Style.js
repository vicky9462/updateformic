import React from 'react'
import StyledButton from './Button'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import logo from './logo192.png';
import { AnimatedLogo, DarkButton, StyledDiv, SubmitButton } from './Button.style'


const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    },
}
const GlobalStyle = createGlobalStyle`
button{
    font-family:'Roboto';

}`
function Style() {
    return (

        <StyledDiv>
            <ThemeProvider theme={theme}>
                {/* <button>button</button> */}
                <GlobalStyle />
                <AnimatedLogo src={logo} />
                <StyledButton>Styled Button</StyledButton>
                <div>
                    <br></br>
                </div>
                <StyledButton variant='outline'>Styled Button</StyledButton>
                <div>
                    <br></br>
                </div>
                <SubmitButton>Submit Button</SubmitButton>
                <div>
                    <br></br>
                </div>
                <DarkButton>Dark Button</DarkButton>
            </ThemeProvider>

        </StyledDiv>


    )
}

export default Style;
