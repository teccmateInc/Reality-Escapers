import React from "react";
import { Card, CardMedia, Typography, Grid, Rating } from "@mui/material";

import { NavLink } from "react-router-dom";

const CustomCard = ({
  facilities,
  imgSrc,
  person,
  price,
  rating,
  reviews,
  text,
  title,
  from,
  height,
  className,
  type,
}) => {
  return (
    <Grid container xs={12} md={6} lg={3} className={className}>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia component="img" height={height} image={imgSrc} alt={title} />
        <Grid container>
          <Grid container xs={6} sx={{ padding: "10px 10px" }}>
            <Typography
              variant="subtitle1"
              className={
                type === "homePage" ? "homePageTitle" : "aboutPageTitle"
              }
            >
              {title}
            </Typography>
            <Typography
              className={type === "homePage" ? "homePageText" : "aboutPageText"}
              variant="subtitle1"
            >
              {text}
            </Typography>
            <Typography
              className={
                type === "homePage" ? "homePageDuration" : "aboutPageDuration"
              }
            >
              {facilities.duration}
            </Typography>
            <Typography
              className={
                type === "homePage" ? "homePageDuration" : "aboutPageDuration"
              }
            >
              {facilities.group}
            </Typography>
            <Typography
              className={
                type === "homePage" ? "homePageDuration" : "aboutPageDuration"
              }
            >
              {facilities.transport}
            </Typography>
            <Typography
              className={
                type === "homePage" ? "homePageDuration" : "aboutPageDuration"
              }
            >
              {facilities.guide}
            </Typography>
          </Grid>
          <Grid xs={6} sx={{ padding: "10px 10px", textAlign: "right" }}>
            <div
              style={{
                height: "20px",
                display: "flex",
                justifyContent: "end",
                fontSize: "1rem",
              }}
            >
              {rating}
              <Rating
                sx={{ fontSize: "1rem" }}
                value={rating}
                readOnly
                precision={0.5}
              />
            </div>
            <Typography
              className={
                type === "homePage" ? "homePageReviews" : "aboutPageReviews"
              }
            >
              {reviews}
            </Typography>
            <Typography>{from}</Typography>
            <Typography sx={{ fontWeight: "700" }}>
              <h5>Rs:{price}/:</h5>
            </Typography>
            <Typography
              className={
                type === "homePage" ? "homePagePerson" : "aboutPagePerson"
              }
            >
              {person}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CustomCard;
