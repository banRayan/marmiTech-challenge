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

export const Menu = styled.div`
    height: 3rem;
    margin: 0 4rem 0 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const MenuItem = styled.p`
    font: ${FONTS.TEXT_500} ${FONTS.MAIN};
    color: black;
    padding: 1rem;
    text-decoration: none;
    

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
