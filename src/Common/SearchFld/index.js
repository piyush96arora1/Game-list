import React from "react";
import { IoIosSearch, IoIosClose } from "react-icons/io";

import SearchFieldStyleV2, { SearchWrapperV2 } from "./style";

const SearchField = ({
  placeHolder = "Search Games",
  onChangeHandler,
  onClear,
  value,
  name,
  onSubmit,
}) => {
  const handleKeyDown = e => {
    if (!value || value.length < 3) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  const onCancel = () => {
    onSubmit("clear");
  };
  const onSearchClick = () => {
    if (!value || value.length < 3) return;

    onSubmit();
  };
  return (
    <SearchWrapperV2>
      <SearchFieldStyleV2
        placeholder={placeHolder}
        onChange={onChangeHandler}
        value={value}
        name={name}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <span onClick={()=>onSearchClick()} id="img-srch">
          <IoIosSearch color={value.length>=3?"#3b95cb":"#333"} />
        </span>
      )}
      {value && (
        <span onClick={() => onCancel()} id="cross-srch">
          <IoIosClose />
        </span>
      )}
    </SearchWrapperV2>
  );
};
export default SearchField;
