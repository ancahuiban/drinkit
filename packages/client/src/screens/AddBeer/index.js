import React, { useRef, useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import Cropper from "react-easy-crop";
import { CropperContainer } from "./style";
import style from "./style.scss";
import AddBeerInfo from "./AddBeerInfo";

const AddBeer = () => {
  let canvasRef = useRef();
  const {
    photo,
    isPhotoCropped,
    isMobile,
    cropDetails,
    setCropDetails,
  } = useContext(AppContext);
  const [pixels, setPixels] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const fr = new FileReader();

  const croppedSize = isMobile ? 220 : 300;

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
          croppedSize,
          croppedSize
        );
      };
      setPixels({ width: croppedSize, height: croppedSize });
      img.src = fr.result;
    };
    fr.readAsDataURL(photo);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setPixels(croppedAreaPixels);
    draw();
  };
  console.log(pixels.x, pixels.y);
  return (
    <>
      {!isPhotoCropped && (
        <CropperContainer>
          <Cropper
            image={photo && URL.createObjectURL(photo)}
            crop={cropDetails}
            aspect={1}
            zoom={zoom}
            onCropComplete={onCropComplete}
            onCropChange={(c) => setCropDetails(c)}
            onZoomChange={(z) => setZoom(z)}
            cropShape="round"
            showGrid={false}
            className={style.reactEasyCrop_Container}
          />
        </CropperContainer>
      )}
      <AddBeerInfo pixels={pixels} canvasRef={canvasRef} />
    </>
  );
};
export default AddBeer;
