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
    justify-content: center;
`;

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SocialCard = styled.a`
    width: 9rem;
    color: black;
    text-decoration: none;
    border: 3px solid ${COLORS.SECONDARY_700};
    border-radius: .5rem;
    cursor: pointer;
    padding: 1rem;
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: 1s;

    p{
        font: 600 1.2rem ${FONTS.MAIN};
    }

    &:hover{
        transform: translateY(-2rem);
        color: ${COLORS.PRIMARY_900};
        border: 3px solid ${COLORS.PRIMARY_900};
    }
`;