import styled from 'styled-components';
import { COLORS, FONTS } from '../../global/theme';

export const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;

     margin: 0 4rem 0 4rem;
`;

export const Title = styled.h1`
    color: ${COLORS.PRIMARY_900};
    font: 600 1.5rem ${FONTS.MAIN};
`;

export const Link = styled.a`
    text-decoration: none;
`;