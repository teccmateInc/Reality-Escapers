import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import CustomCard from "./Card";
const About = () => {
  const country = useSelector((state) => state.filterSlice.country);
  return (
    <div>
      <Grid container sx={{ padding: "20px 20px" }} className="aboutPage">
        <Grid container>
          {country.map((val, i) => {
            const {
              id,
              imgSrc,
              person,
              price,
              rating,
              reviews,
              text,
              title,
              facilities,
              from,
            } = val;
            console.log(val);
            return (
              i < 4 && (
                <CustomCard
                  id={id}
                  imgSrc={imgSrc}
                  person={person}
                  from={from}
                  price={price}
                  rating={rating}
                  reviews={reviews}
                  text={text}
                  title={title}
                  facilities={facilities}
                  height={"140px"}
                  className="aboutPageCard"
                  type="aboutPage"
                />
              )
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
