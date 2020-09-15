import React, { useState, useContext } from "react";
import { AppContext } from "../../AppContext";

const AddBeer = () => {
  const [isPhotoCropped, setIsPhotoCropped] = useState(false);
  const { photo } = useContext(AppContext);
  console.log(photo);
  return (
    <>
      {!isPhotoCropped && (
        <div>
          <img src={photo} alt="pic" />
        </div>
      )}
    </>
  );
};
export default AddBeer;
