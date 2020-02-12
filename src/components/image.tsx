import React, { useEffect, useState } from "react";
import posterPlaceholder from "../images/poster-placeholder.png";

interface IComponentProps {
  alt: string;
  className: string;
  src: string;
}

const ContentImage: React.FC<IComponentProps> = (props: IComponentProps): JSX.Element => {
  const [useFallbackImage, setFallbackImageUsage]: Array<any> = useState(false);
  const [imageLoaded, setImageLoadStatus]: Array<any> = useState(false);

  const handleFallbackImageUse = (): void => {
    setFallbackImageUsage(true);
  };

  const handleImageLoadStatus = (): void => {
    setImageLoadStatus(true);
  };

  useEffect(() => {
    return () => setFallbackImageUsage(false);
  }, [props.alt, props.src]);

  return (
    <img
      alt={props.alt}
      className={`${props.className} ${imageLoaded ? "loaded" : "pending"}`}
      onError={handleFallbackImageUse}
      onLoad={handleImageLoadStatus}
      src={useFallbackImage ? posterPlaceholder : props.src}
    />
  );
};

ContentImage.defaultProps = {
  alt: "",
  className: "",
  src: ""
};

export default ContentImage;
