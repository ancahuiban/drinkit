import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import Cropper from "react-easy-crop";

const AddBeer = () => {
  const { photo, isPhotoCropped, setIsPhotoCropped } = useContext(AppContext);
  const [croppedPhoto, setCroppedPhoto] = useState(photo);
  const [cropDetails, setCropDetails] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  console.log(croppedPhoto);
  return (
    <>
      {!isPhotoCropped && (
        <Cropper
          image={croppedPhoto}
          crop={cropDetails}
          zoom={zoom}
          aspect={1}
          onCropChange={(c) => setCropDetails(c)}
          onZoomChange={(z) => setZoom(z)}
          cropShape="round"
          showGrid={false}
        />
      )}
      {isPhotoCropped && (
        <div>
          <img src={croppedPhoto} alt="pic" />
        </div>
      )}
    </>
  );
};
export default AddBeer;
