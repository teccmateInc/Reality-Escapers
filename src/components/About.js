import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import CustomCard from "./Card";
import imgUrl from "../assets/imgs/about/img1.jpeg";

const About = () => {
  const country = useSelector((state) => state.filterSlice.country);
  return (
    <div>
      <Grid container className="aboutPage">
        <Grid container className="section1">
          <Grid className="segment1" xs={12} md={6}>
            <Typography className="heading">About Reality Scapper</Typography>
            <Typography className="para">
              100+ Best Travel Quotes with Photos to Inspire You in 2021 ANNA
              FAUSTINOOCTOBER 1, 2021 TRAVEL INSPIRATION This article may
              contain affiliate / compensated links. For full information,
              please see our disclaimer here. Looking for the best travel quotes
              to inspire you? Here are some of my favorite ones to inspire you!
              As mentioned, to serve as inspiration for you during these times,
              here’s a collection of the 100 best travel quotes to get your
              wanderlust juices flowing. Call me crazy but I’m a sucker for
              travel quotes. There’s something about them that immediately
              excites me!
            </Typography>
          </Grid>
          <Grid className="segment2" xs={12} md={6}>
            <img src={imgUrl} />
          </Grid>
        </Grid>
        <Grid className="section2" container>
          <Typography className="typography">
            Everyone’s talking about
          </Typography>
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
