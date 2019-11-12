import React, { useState } from "react";
import "../styles/search.css";

interface IComponentProps {
  search: (value: string) => void;
}

const Search: React.FC<IComponentProps> = (props: IComponentProps) => {
  const [searchValue, setSearchValue]: Array<string | React.Dispatch<React.SetStateAction<string>>> = useState("");

  const handleSearchInputChanges = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  }

  const resetInputField = (): void => {
    setSearchValue("");
  }

  const callSearchFunction = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();

    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search"
      />

      <button type="submit" onClick={callSearchFunction}>
        Submit
      </button>
    </form>
  );
}

export default Search;
