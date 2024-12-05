import styled from 'styled-components';

const ButtonS = styled.button`
  
  color: red;
  background-color: ${({fatma})=>fatma ? "blue" : "lightgreen"};
  border: 2px solid red;
  cursor: pointer;
  padding: 1rem 1.5rem;
  &:hover{
    transform: scale(0.90);
  }
`;

export const YanciButton=styled(ButtonS)`
 width: 330px;
 font-size: 3rem;
 background-color: aqua;
 color: ${({gokhan})=> gokhan ? "coral" : "black"};

 height: ${({kazim})=>kazim ? kazim : "150px"};
 height: ${({kazim})=>kazim || "150px"};

`

export default ButtonS;
