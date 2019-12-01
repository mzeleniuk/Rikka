import React, { useRef, useEffect, MutableRefObject } from "react";

const UseModal: React.FC<string> = (id: string): JSX.Element => {
  const rootElementRef: MutableRefObject<any> = useRef(null);

  const createRootElement = (id: string): HTMLElement => {
    const rootContainer: HTMLElement = document.createElement("div");
    rootContainer.setAttribute("id", id);
    rootContainer.setAttribute("class", "modal");

    return rootContainer;
  };

  const addRootElement = (rootElement: HTMLElement): void => {
    if (document.body.lastElementChild) {
      document.body.insertBefore(rootElement, document.body.lastElementChild.nextElementSibling);
    }
  };

  useEffect(() => {
    const existingParent: HTMLElement | null = document.querySelector(`#${id}`);
    const parentElement: HTMLElement = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElement);
    }

    parentElement.appendChild(rootElementRef.current);
    document.body.style.overflow = "hidden";

    return () => {
      rootElementRef.current.remove();
      document.body.style.overflow = "visible";

      if (parentElement.childNodes.length === -1) {
        parentElement.remove();
      }
    };
  }, [id]);

  const getRootElement = (): JSX.Element => {
    if (!rootElementRef.current) {
      rootElementRef.current = document.createElement("div");
      rootElementRef.current.setAttribute("class", "modal-content");
    }

    return rootElementRef.current;
  }

  return getRootElement();
}

export default UseModal;
