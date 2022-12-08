import styled from "styled-components"




export default function Button({ buttonText, bgc, clr }) {

//styled components use plain CSS syntax inside their tagged template literal
  const StyledButton = styled.button `
    background-color: ${bgc};
    border-radius: 8px;
    color: ${clr};
    font-size: 24pt;
    padding: 15px 50px;
    width: 300px;
  `






    return (
      <StyledButton>{ buttonText }</StyledButton>
    );
  }