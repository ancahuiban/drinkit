import React, { useRef, useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import Cropper from "react-easy-crop";

const AddBeer = () => {
  let canvasRef = useRef();
  const { photo, isPhotoCropped } = useContext(AppContext);
  const [cropDetails, setCropDetails] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pixels, setPixels] = useState({});
  const fr = new FileReader();

  const draw = () => {
    let canvas = canvasRef && canvasRef.current;
    const ctx = canvas.getContext("2d");
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(
          img,
          pixels.x,
          pixels.y,
          pixels.width,
          pixels.height,
          0,
          0,
          pixels.width,
          pixels.height
        );
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(photo);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setPixels(croppedAreaPixels);
    draw();
  };
  return (
    <>
      {!isPhotoCropped && (
        <Cropper
          image={photo && URL.createObjectURL(photo)}
          crop={cropDetails}
          zoom={zoom}
          aspect={1}
          onCropComplete={onCropComplete}
          onCropChange={(c) => setCropDetails(c)}
          onZoomChange={(z) => setZoom(z)}
          cropShape="round"
          showGrid={false}
        />
      )}
      <div style={isPhotoCropped ? {} : { visibility: "hidden" }}>
        <canvas
          style={{ background: "black" }}
          ref={canvasRef}
          width={pixels.width}
          height={pixels.height}
        />
      </div>
    </>
  );
};
export default AddBeer;
