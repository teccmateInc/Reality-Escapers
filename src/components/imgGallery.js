import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { Grid, Typography } from "@mui/material";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Gallery = () => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state);
  let { country } = states.filterSlice;
  let { imgId } = states.modal;

  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const images = country[id].images;
  const [image, setImage] = useState(country[id].images[imgId]);
  const [index, setIndex] = useState(imgId);
  const handleArrow = (e, type) => {
    let imageIdx;
    type === "next"
      ? (imageIdx = index === images.length - 1 ? 0 : index + 1)
      : (imageIdx = index === 0 ? images.length - 1 : index - 1);

    setImage(country[id].images[imageIdx]);
    setIndex(imageIdx);
  };

  return (
    <Grid className="imgGallery" container>
      <Grid container xs={10} className="modal noSelect">
        <span className="leftArrow" onClick={(e) => handleArrow(e, "prev")}>
          <BsArrowLeft />
        </span>
        <img
          style={{
            maxHeight: "410px",
            width: "100%",
            padding: "5px",
          }}
          src={image}
        />
        <span className="rightArrow" onClick={(e) => handleArrow(e, "next")}>
          <BsArrowRight />
        </span>
      </Grid>
      <Grid className="img hidescroll" container xs={2}>
        {images.map((img, i) => (
          <img
            key={i}
            onClick={() => {
              setIndex(i);
              setImage(country[id].images[i]);
            }}
            style={{ width: "100%", padding: "5px" }}
            src={img}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Gallery;
