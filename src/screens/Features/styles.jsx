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
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const FeaturesItem = styled.div`

    display: flex;
    /* align-items: center; */

    margin-bottom: 1rem;

`;

export const Description = styled.p`
    width: 500px;

    color: ${COLORS.SECONDARY_700};
    font: 500 1.3rem ${FONTS.MAIN};
    margin-left: .8rem;
`;

export const Title = styled.h1`
    font: ${FONTS.TITLE_600} ${FONTS.MAIN};
    color: ${COLORS.PRIMARY_900};
    margin-bottom: 1rem;
`;