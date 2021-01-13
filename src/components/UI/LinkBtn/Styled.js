import styled from 'styled-components';

const StyledLinkBtn = styled.a`
    display: flex;
    width: 197px;
    height: 64px;
    font-family: ${({ theme }) => theme.menuFont};
    background: ${({ theme }) => theme.active};
    border: 2px solid ${({ theme }) => theme.active};
    box-sizing: border-box;
    font-style: normal;
    font-weight: normal;
    cursor: pointer;

    &:hover .linkbtn__title {
        background: ${({ theme }) => theme.active};
        color: ${({ theme }) => theme.containerBackground};
    }

    .linkbtn__title {
        background: ${({ theme }) => theme.containerBackground};
        padding: 17px 15px;
        text-align: center;
        font-size: 20px;
        line-height: 147.6%;
        letter-spacing: 0.06em;
        color: ${({ theme }) => theme.homeTitleText};
        transition: all 0.8s;
    }

    .linkbtn__icon {
        margin: 0 auto;
    }
`;

export default StyledLinkBtn;
