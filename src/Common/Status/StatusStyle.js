import styled from "styled-components";
export const StatusStyle = styled.div`
  padding: 7px 20px;
  border-radius: 19px;
  line-height: 18px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => `1px solid ${props.color}`};
  font-size: 0.7rem;
  max-width: ${props => (props.width ? props.width : `95px`)};
  text-align: center;
  /* min-width: 120px; */
  @media screen and (max-width: 1200px) {
    /* height: 140px;
    top: 40px */
    border: none;
    padding: 0;
    text-align: left;
  }
`;

export default StatusStyle