import React, { useState } from "react";
import { Grid,Typography,CardMedia,CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { InputDate } from "../helper/meta";
import { Link } from 'react-router-dom';
const Rooms = () => {
  const history = useHistory();
  const rooms = useSelector((state) => state.filterSlice.rooms);
  const handleClick = () => {
    history.push("/");
  };
  // const images = useSelector(state => state.rooms);
  // console.log(images)
  return (
    <div className="rooms">
      <Grid container xs={12} className="section1">
        <div className="text">
          <h2>Our Rooms</h2>
          <button onClick={handleClick}>Return Home </button>
        </div>
      </Grid>
      <Grid container className="section2">
        <Grid sx={{padding:"30px 0"}} container xs={12}>
          <h2>Our Rooms</h2>
        </Grid>
        <Grid sx={{marginBottom:"20px"}} container className="search">
          <Grid xs={12} sm={6} md={3} className="box" >
            <span>Check-In</span>
            <InputDate className="roomInput" placeholder={"Check In"}/>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="box" display="flex" flexDirection="column">
            <span>Check-Out</span>
            <InputDate className="roomInput" placeholder={"Check Out"}/>
          </Grid>
          <Grid xs={12} sm={6} md={3} className="box" display="flex" flexDirection="column">
            <span>Adult</span>
            <input
              className="roomInput"
              type="number"
              placeholder="Adult"
              onChange={(e) => {
                console.log(e.target);
              }}
            />
          </Grid>
          <Grid xs={12} sm={6} md={3} className="box" display="flex" flexDirection="column">
            <span>Kids</span>
            <input className="roomInput" type="number" placeholder="Kids"/>
          </Grid>
          <Grid xs={3} className="box" display="flex" flexDirection="column">
            <button className="searchBtn">Search</button>
          </Grid>
        </Grid>
          {rooms.map((value, index) => (
            <Grid container xs={12} className="content" key={index}>
              <Grid className="imgGrid"
               xs={12} sm={3}>
                <Link to={`/rooms/${value.id}`}>
                  <CardMedia
                    className="img"
                    component="img"
                    alt={value.title}
                    image={value.imgSrc}
                  />
                  <button className="InfoBtn">More Info</button>
                </Link>
              </Grid>
              <Grid container xs={8} sm={5}>
              <CardContent>
                <Typography className="title" variant="h6">
                      {value.title}
                </Typography>
                  <Typography className="text" variant="h6">
                      {value.text}
                  </Typography>
                  <Typography className="facilities" variant="h6">
                      {value.size}
                  </Typography>
                  <Typography className="facilities" variant="h6">
                      {value.bed}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid container xs={3} sm={4}>
              <CardContent sx={{textAlign:"end",marginLeft:"auto"}}>
                    <Typography className="from" variant="h6">
                        From
                    </Typography>
                    <Typography className="price">
                        ${value.price}
                    </Typography>
                    <Link to={`/rooms/${value.id}`}>
                      <Typography variant="button">
                          <button>More Info</button>
                      </Typography>
                    </Link>
                </CardContent>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Rooms;
