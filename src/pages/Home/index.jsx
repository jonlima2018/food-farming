import logo from '../../assets/logo.svg';
import separator from '../../assets/separator.svg';
import LinkBtn from '../../components/UI/LinkBtn';
import StyledHome from './Styled';

function Home() {
    return (
        <StyledHome>
            <div className="home__content">
                <div className="home__group">
                    <h1 className="home__title">Food</h1>
                    <img className="home__logo" src={logo} alt="Logo" />
                </div>
                <h1 className="home__title2">Farming</h1>
                <img
                    className="home__separator"
                    src={separator}
                    alt="Separator"
                />
                <p className="home__text">
                    Food Farming is proud of our past and excited about our
                    future. We strive to continue being one of India and New
                    Zealand&apos;s great food companies, offering quality fruits
                    and vegetable.
                </p>
                <LinkBtn title="Read More" />
            </div>
            <div className="home__background" />
        </StyledHome>
    );
}

export default Home;
