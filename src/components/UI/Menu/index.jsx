import logo from '../../../assets/logo.svg';
import StyledNav from './Styled';

function Menu() {
    return (
        <StyledNav>
            <ul className="nav__menu">
                <li className="nav__item nav__item--active">Home</li>
                <li className="nav__item">About</li>
                <li className="nav__item">Products</li>
            </ul>
            <img className="nav__img" src={logo} alt="Logo" />
            <ul className="nav__menu">
                <li className="nav__item">Recipes</li>
                <li className="nav__item">FAQ</li>
                <li className="nav__item">Help</li>
            </ul>
        </StyledNav>
    );
}

export default Menu;
