import { useState } from 'react';
import logo from '../../../assets/logo.svg';
import StyledNav from './Styled';

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledNav>
            <img
                className="nav__logo"
                src={logo}
                alt="Logo"
                onClick={() => setShowMenu(!showMenu)}
            />

            <ul className={`nav__menu ${showMenu ? 'nav__menu--active' : ''}`}>
                <li className="nav__item nav__item--active">Home</li>
                <li className="nav__item">About</li>
                <li className="nav__item">Products</li>
                <li className="nav__item__logo">
                    <img className="nav__img" src={logo} alt="Logo" />
                </li>
                <li className="nav__item">Recipes</li>
                <li className="nav__item">FAQ</li>
                <li className="nav__item">Help</li>
            </ul>
        </StyledNav>
    );
}

export default Menu;
