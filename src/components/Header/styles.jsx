import styled from 'styled-components';
import { COLORS, FONTS } from '../../global/theme';

export const Container = styled.header`
    width: 100%;
    height: 5rem;
    /* background-color: ${COLORS.PRIMARY_800}; */

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Menu = styled.ul`
    height: 3rem;
    margin: 0 4rem 0 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled.li`
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s;

    &:hover{
        border-bottom: 3px solid ${COLORS.PRIMARY_900};
        color: ${COLORS.PRIMARY_900};
        font-weight: 700;
        border-radius: 1px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: black;
`;