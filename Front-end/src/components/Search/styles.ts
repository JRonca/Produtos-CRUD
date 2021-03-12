import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 15vh;
    margin-top:5vh;
    form {
        display: flex;
        flex: 1;
        flex-direction: row;
        button{
            margin-left: 2vw;
            background: #2039CC;
            border-radius: 10px;
            border: 0;
            padding: 16px;
            color: ${shade(0.2, '#FFF')};
            width: 30%;
            font-weight: 500;
            transition: background-color 0.2;
            &:hover {
                background: ${shade(0.2, '#2039CC')};
            }
        }
    }
`;