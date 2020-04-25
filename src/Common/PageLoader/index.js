import React from "react";
import Loader from "react-loader-spinner";
import PageLoaderWrapper from "./style";
import StyleConstant from "../../Util/styeConstants";

const PageLoader = ({ size = 50 }) => {
  return (
    <PageLoaderWrapper>
      <Loader type="ThreeDots" color={StyleConstant.GREEN6} height={size} width={size} />
    </PageLoaderWrapper>
  );
};

export default PageLoader;
