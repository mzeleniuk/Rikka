import React from "react";
import { createPortal } from "react-dom";

import useModal from "./useModal";
import "../styles/modal.css";

interface IComponentProps {
  children: Element | any;
  id: string;
}

const Modal: React.FC<IComponentProps> = (props: IComponentProps): JSX.Element => {
  const target: any = useModal(props.id);
  return createPortal(props.children, target);
};

export default Modal;
