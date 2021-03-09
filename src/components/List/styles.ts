import styled from 'styled-components';

export const Container = styled.ul`
  display:flex;
  flex:0.9;
  align-items:center;
  justify-content:center;
  list-style:none;
  & + ul {
    margin-top: 4vh;
  }
`;