import React from "react";

import Search from "./search";
import "../styles/header.css";

interface IComponentProps {
  search: (value: string) => void;
  text: string;
}

const Header: React.FC<IComponentProps> = (props: IComponentProps) => {
  return (
    <header className="app-header">
      <h2>{props.text}</h2>

      <Search search={props.search} />
    </header>
  );
}

export default Header;
