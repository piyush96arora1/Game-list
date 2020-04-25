import styled from "styled-components";
import StyleConstant from "../../Util/styeConstants";

const ButtonStyle = styled.button`
  border-radius: 4px;
  background: ${props => (props.bgColor ? props.bgColor : StyleConstant.GREEN1)};
  cursor: ${props => (props.disabled ? `not-allowed` : ``)};
  line-height: 18px;
  font-weight: 600;
  width: ${props => (props.width ? props.width : "")};
  font-size: 0.7rem;
  color: ${props => (props.disabled ? "black" : props.color ? props.color : StyleConstant.WHITE)};
  padding: ${props => (props.padding ? props.padding : `11px 17px`)};
  margin: ${props => (props.margin ? props.margin : `0px`)};
  letter-spacing: 0.1px;
  border: ${props => (props.border ? props.border : "")};
`;
export default ButtonStyle;
