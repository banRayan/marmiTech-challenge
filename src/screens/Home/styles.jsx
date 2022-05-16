import styled from 'styled-components';
import { COLORS, FONTS } from '../../global/theme';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.BACKGROUND};

    display: flex;
    flex-direction: column;
`;

export const MainContent = styled.main`
    height: 100%;
    width: 100%;
    /* padding: 8rem; */

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Slogan = styled.div`
    width: 40rem;
    /* background-color: gray; */

`;

export const Title = styled.h1`
    color: ${COLORS.SECONDARY_700};
    font: 700 5rem ${FONTS.MAIN};
    
    margin-bottom: 2rem;
`;

export const Description = styled.p`
    width: 30rem;
    color: ${COLORS.PRIMARY_900};
    font: 500 1.5rem ${FONTS.MAIN}; 

    margin-bottom: 2rem;
`;

export const Button = styled.button`
    background-color: ${COLORS.PRIMARY_900};
    color: ${COLORS.BACKGROUND};
    font: 500 1.5rem ${FONTS.MAIN};
    padding:.8rem 3rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: .2s;

    &:hover{
        background-color:   ${COLORS.PRIMARY_800};
        color: ${COLORS.BACKGROUND};
        /* border:2px solid ${COLORS.PRIMARY_900}; */
    }
`;

//chart container

export const Chart = styled.div`
    width: 600px;
    height: 600px;
    /* background-color: grey; */
`;