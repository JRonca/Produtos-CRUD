import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
  display:flex;
  flex-direction:column;

`;

export const ProductInfo = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    background: #232129;
    border-radius: 10px 10px 0 0;
    border: 0;
    padding: 0 16px;
    color: ${shade(0.2, '#FFF')};
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2;
    h2{
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
    img{
        margin-bottom: 2vh;
        width:80%;
        border-radius: 100%;
    }
`

export const Buttons = styled.div`
    background: #232129;
    border-radius: 0 0 10px 10px;
    button{
        border-radius: 0 0 0 10px;
        background: #2039CC;
        height: 56px;
        border: 0;
        padding: 0 16px;
        color: ${shade(0.2, '#FFF')};
        width: 49.75%;
        font-weight: 500;
        & + button{
            border-radius: 0 0 10px 0;
            margin-left: 0.5%;
        }
        &:hover {
            background: ${shade(0.2, '#2039CC')};
        }
    }
`