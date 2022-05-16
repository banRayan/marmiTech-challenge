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
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`;

//chart container

export const Title = styled.h1`
    font: ${FONTS.TITLE_600} ${FONTS.MAIN};
    color: ${COLORS.PRIMARY_900};
    margin-bottom: 1rem;
`;

export const Chart = styled.div`
    width: 600px;
    height: 600px;
    /* background-color: grey; */
`;

export const InputContainer = styled.div`
    min-width: 350px;
    /* padding: 2rem; */

    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: center; */
`;

export const InputValue = styled.input`
    background-color: ${COLORS.BACKGROUND};
    width: 100%;
    height: 2.5rem;
    /* outline: none; */
    margin-bottom: 1rem;
    border: 1px solid ${COLORS.SECONDARY_700};
    border-radius: 5px;
    padding-left: 1rem;
    position: relative;

    &:focus{
        outline: 1px solid ${COLORS.PRIMARY_900};
        border: none;
    }
`;

export const InputLabels = styled.label`
    font: ${FONTS.TEXT_600} ${FONTS.MAIN};
    color: ${COLORS.SECONDARY_700};
    margin-bottom: .5rem;
    margin-top: .5rem;
    
`;

export const Button = styled.button`
    width: 7rem;
    height: 2rem;
    color: ${COLORS.BACKGROUND};
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    background-color: ${COLORS.PRIMARY_900};
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export const ChartsButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const ChartsButton = styled.button`
    font: 600 1.2rem ${FONTS.MAIN};
    color: black;
    border: none;
    background-color: transparent;
    margin: 0 1rem 1rem 0;
    cursor: pointer;
    transition: .2s;

    display: flex;
    align-items: center;

    &:hover{
        color: ${COLORS.PRIMARY_900};
    }
`;

export const Warn = styled.div`
    /* width: 12rem; */
    height: 5rem;
    border: 1px solid ${COLORS.PRIMARY_900};
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;