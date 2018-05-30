import React from "react";

const ImagePreviev = props => {
  return (
    <div className="image-box">
      <img
        src={props.image}
        alt=""
        onClick={() => props.onImageClick(props.image)}
      />
    </div>
  );
};

export default ImagePreviev;
