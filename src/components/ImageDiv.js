import React, { useEffect, useState } from "react";

const ImageDiv = ({ source, classType, id, children }) => {
  const useProgressiveImage = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null);

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
  };

  const loaded = useProgressiveImage(source);

  return (
    <div
      style={{ backgroundImage: `url(${loaded})` }}
      className={classType}
      id={id}
    >
      {children}
    </div>
  );
};

export default ImageDiv;
