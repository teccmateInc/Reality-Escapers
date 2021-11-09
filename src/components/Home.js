import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import CustomCard from "./Card";
import { HOME_COUNTRIES_TITLE, HOME_COUNTRIES_DESC } from "../helper/constant";
import { useHistory } from "react-router";

const Home = () => {
  const country = useSelector((state) => state.filterSlice.country);
  const images = country[0].images;
  const history = useHistory();
  const [homeCountriesDesc, setHomeCountriesDesc] = useState({
    imgSrc: HOME_COUNTRIES_DESC[0].img,
    title: HOME_COUNTRIES_DESC[0].title,
    desc: HOME_COUNTRIES_DESC[0].desc,
  });
  const handleClick = () => {
    history.push("/countries");
  };
  useEffect(() => {
    return () => {
      console.log("Home is unmounted");
    };
  }, []);

  const imgHandleClick = (value) => {
    setHomeCountriesDesc({
      imgSrc: HOME_COUNTRIES_DESC[value].img,
      title: HOME_COUNTRIES_DESC[value].title,
      desc: HOME_COUNTRIES_DESC[value].desc,
    });
  };
  return (
    <div className="HomePage">
      <div className="Home">
        <div className="homeContent">
          <h1>Traveling</h1>
          <p style={{ margin: "15px 0" }}>Discover countries in the globe</p>
          <button onClick={handleClick} className="exploreBtn">
            Explore Now
          </button>
        </div>
      </div>
      <div className="section-1">
        <div className="topText">
          <h2>Popular Places</h2>
          <p>
            Suffered alteration in some form, by injected humour or good day{" "}
            <br /> randomised booth anim 8-bit hella wolf moon beard words.
          </p>
          <Grid container alignItems="center" justifyContent="center">
            {country.map((value, index) => (
              <Grid key={index} xs={12} sm={6} lg={3} sx={{ maxWidth: 420 }}>
                <Card sx={{ margin: "20px" }}>
                  <CardMedia
                    component="img"
                    alt={value.title}
                    height="200"
                    image={value.imgSrc}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">See Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className="section-2">
            <Typography className="heading" variant="h4">
              Explore Our Top Destinations
            </Typography>
            <Grid container className="btnClass">
              {HOME_COUNTRIES_TITLE.map((val, i) => (
                <Button
                  key={i}
                  onClick={() => imgHandleClick(i)}
                  className="btn"
                >
                  {val}
                </Button>
              ))}
            </Grid>
            <Grid container className="section-2-Child">
              <Grid container xs={12} lg={6} className="segment1">
                <img className="img" src={homeCountriesDesc.imgSrc} />
              </Grid>
              <Grid container xs={12} lg={6} className="segment2">
                <Typography sx={{ fontWeight: "800" }} variant="h2">
                  {homeCountriesDesc.title}
                </Typography>
                <Typography sx={{ fontSize: "1em" }} variant="h6">
                  {homeCountriesDesc.desc}
                </Typography>
              </Grid>

              <Typography className="heading">
                Unforgettable things to do
              </Typography>
              <Grid container sx={{ padding: "20px 0" }}>
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
                        className="homePageCard"
                        type="homePage"
                      />
                    )
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
