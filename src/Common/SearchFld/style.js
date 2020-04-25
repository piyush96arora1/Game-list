import styled from "styled-components";
import StyleConstant from "../../Util/styeConstants";

const SearchFieldStyleV2 = styled.input`
  padding: 11px 16px;
  padding-right: 28px;
  line-height: 20px;
  font-size: 0.7rem;
  height: 20px;
  border: 1px solid ${StyleConstant.GREY2};
  border-radius: 4px;
  background-color: ${props => (props.bgColor ? props.bgColor : StyleConstant.WHITE)};
  border: ${props => (props.error ? `1px solid red !important` : ``)};
  padding-right: 70px;
  :focus {
    border: 1px solid ${StyleConstant.GREEN5};
  }

  ::placeholder {
    color: #8b8497;
    font-size: 0.7rem;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    color: ${StyleConstant.GREY1};
    font-size: 0.8rem;
  }

  ::-ms-input-placeholder {
    color: ${StyleConstant.GREY1};
    font-size: 0.8rem;
  }
`;
export const SearchWrapperV2 = styled.div`
  font-size: 0.7rem;
  display: flex;
  flex-direction: row;
  position: relative;
  #img-srch {
    position: absolute;
    right: 15px;
    font-size: 17px;
    top: 11px;
    cursor: pointer;
  }
  #cross-srch {
    position: absolute;
    right: 49px;
    font-size: 17px;
    top: 11px;
    cursor: pointer;
  }
`;

export default SearchFieldStyleV2;
