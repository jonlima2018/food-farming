import arrowRight from '../../../assets/arrow-right.svg';
import StyledLinkBtn from './Styled';

function LinkBtn({ title }) {
    return (
        <StyledLinkBtn>
            <span className="linkbtn__title">{title}</span>
            <img className="linkbtn__icon" src={arrowRight} alt="arrow-right" />
        </StyledLinkBtn>
    );
}

export default LinkBtn;
