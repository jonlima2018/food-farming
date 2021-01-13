import styled from 'styled-components';
import background from '../../assets/background.png';

const StyledHome = styled.section`
    margin: 40px 60px 120px;
    height: 634px;
    background: ${({ theme }) => theme.containerBackground};
    box-shadow: 0px 40px 40px -30px ${({ theme }) => theme.blurBackground};

    &::after {
        content: '';
        display: block;
        z-index: 1;
        width: 660px;
        position: absolute;
        height: 878px;
        right: 0;
        top: 0px;
        background: url(${background});
        background-repeat: no-repeat;
    }

    .home__content {
        padding: 81px 120px 0;
        height: 472px;
        color: ${({ theme }) => theme.homeTitleText};
        font-family: ${({ theme }) => theme.homeTitleFont};
        font-style: normal;
        font-weight: bold;
        letter-spacing: 0.06em;

        .home__group {
            display: flex;

            .home__title {
                font-size: 50px;
                line-height: 67px;
            }

            .home__logo {
                margin: -18px 0 0 14px;
                width: 45.21px;
                height: 69.04px;
            }
        }

        .home__title2 {
            text-transform: uppercase;
            font-size: 70px;
            line-height: 93px;
        }

        .home__separator {
            margin: 20px 0 25px;
        }

        .home__text {
            width: 535px;
            height: 108px;
            font-family: ${({ theme }) => theme.menuFont};
            font-weight: normal;
            font-size: 18px;
            line-height: 147.6%;
            letter-spacing: 0.06em;
            margin-bottom: 72px;
        }

        .home__scroll {
            margin: 20px auto 40px;
            display: flex;
            position: relative;

            &::after {
                content: '.';
                z-index: 1;
                width: 660px;
                position: absolute;
                height: 878px;
                right: 0;
                top: 0px;
            }
        }
    }

    @media (max-width: 1260px) {
        &::after {
            display: none;
        }
    }
`;

export default StyledHome;
