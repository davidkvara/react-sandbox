import React from "react";
import ImagePreview from "./ImagePreview";

const ImageGrid = props => {
  return (
    <div className="image-container">
      {props.images.map(image => (
        <ImagePreview
          key={image.id}
          image={image.largeImageURL}
          onImageClick={props.onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
