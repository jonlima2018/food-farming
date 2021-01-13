import styled from 'styled-components';

const StyledNav = styled.nav`
    display: inline-flex;
    width: 100%;
    height: 146px;
    justify-content: center;
    align-items: center;
    z-index: 99;
    position: relative;
    /* background: ${({ theme }) => theme.menuBackground}; */

    .nav__menu {
        display: flex;
    }

    .nav__item {
        text-transform: capitalize;
        padding: 15px;
        margin: 0 10px;
        font-family: ${({ theme }) => theme.menuFont};
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.active};
        }
    }

    .nav__item--active {
        font-weight: 800;
        color: ${({ theme }) => theme.active};
    }

    .nav__img {
        margin: 0 60px;
        height: 59px;
        width: 38.64px;
    }
`;

export default StyledNav;
