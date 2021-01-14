import styled from 'styled-components';

const StyledNav = styled.nav`
    display: inline-flex;
    width: 100%;
    height: 146px;
    justify-content: center;
    align-items: center;
    z-index: 99;
    position: relative;

    .nav__menu {
        display: flex;

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
    }

    .nav__logo {
        display: none;
    }

    .nav__img {
        margin: 0 60px;
        height: 59px;
        width: 38.64px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;

        .nav__logo {
            display: block;
            margin-top: 20px;
            margin-left: 30px;
            height: 59px;
            width: 38.64px;
            cursor: pointer;
        }

        .nav__menu {
            visibility: hidden;
            opacity: 0;
            background: ${({ theme }) => theme.menuBackground};
            border-radius: 4px;
            box-shadow: 0px 1px 4px -1px black;
            flex-direction: column;
            position: absolute;
            z-index: 1;
            top: 85px;
            left: 5px;

            .nav__item__logo {
                display: none;
            }
        }

        .nav__menu--active {
            transition: all 0.8s ease-in;
            visibility: visible;
            opacity: 1;
        }
    }
`;

export default StyledNav;
