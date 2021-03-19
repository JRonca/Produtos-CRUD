import styled from 'styled-components';
import { shade } from 'polished';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8); /* Black w/ opacity */
  position: fixed;
  display:flex;
  align-items:center;
  justify-content: center;
`;
export const ModalBox = styled.div`
  display:block;
  background: #312E38;
  padding: 20px;
  border-radius: 50px;
  height: 40vh;
  width: 50%; 
`;
export const Header = styled.div`
  display:flex;
  justify-content: center;
  text-align: center;
  flex:1;
  h1{
    position:absolute;
    margin: auto;
  }
`;
export const CloseButton = styled.button`
  position:relative;
  display:flex;
  background: #312E38;
  color: ${shade(0.2, '#FFF')};
  border: 0;
  cursor: pointer;
  border-radius: 100%;
  padding:5px;
  margin-left:auto;
  margin-right:1vw;
  z-index:1;
  &:hover {
    background: ${shade(0.2, '#312E38')};
  }
`;
export const Content = styled.div`
  display:flex;
  justify-content: center;
  flex:1;
  height: 80%;
  padding: 20px;
`;