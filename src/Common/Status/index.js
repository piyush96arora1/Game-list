import StatusStyle from "./StatusStyle";
import StyleConstant from "../../Util/styeConstants";
import React from "react";
const Status = ({ status }) => {
    let obj = {
      backgroundColor: "#fff",
      color: StyleConstant.WHITE,
      text: "",
      width: "",
    };
    switch (status) {
      case "EDITORS_CHOICE":
        obj = { ...obj, color: `#FFCA1F`, text: "Editors choice", width: "95px" };
        break;
        default:
        obj = { ...obj, color: `#FFCA1F`, text: "Unknown", width: "95px" };
    }
    return (
      <StatusStyle backgroundColor={obj.backgroundColor} color={obj.color} width={obj.width}>
        {obj.text}
      </StatusStyle>
    );
  };
  
  export default Status