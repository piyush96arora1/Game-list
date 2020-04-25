import React from "react";
import Loader from "react-loader-spinner";

import StyleConstant from "../../Util/styeConstants";



import ButtonStyle  from "./style";

const PrimaryButton = ({
  text,
  onClickHandler,
  isDisabled,
  isLoading,
  padding,
  width,
  height,
  color,
  noBorder,
  margin,
  bgColor,
  border,
  type
}) => {
  return (
    <ButtonStyle
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      disabled={isDisabled || isLoading}
      onClick={onClickHandler}
      color={color}
      noBorder={noBorder}
      bgColor={bgColor}
      border={border}
      type={type || "button"}
    >
      {!isLoading && <span>{text}</span>}
      {isLoading && <Loader type="ThreeDots" height={10} width={30} color={StyleConstant.WHITE} />}
    </ButtonStyle>
  );
};

export default PrimaryButton;
