import React from "react";
import "../styles/header.css";

interface IComponentProps {
  text: string;
}

const Header: React.FC<IComponentProps> = (props: IComponentProps) => {
  return (
    <header className="app-header">
      <h2>{props.text}</h2>
    </header>
  );
}

export default Header;
