import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Startdate, Enddate } from "../helper/meta";
import { Link } from 'react-router-dom';

const Rooms = () => {
  const history = useHistory();
  const [adult, setAdult] = useState(1);
  const rooms = useSelector((state) => state.rooms);
  const handleClick = () => {
    history.push("/");
  };
  // const images = useSelector(state => state.rooms);
  // console.log(images)
  return (
    <div className="rooms">
      <div className="container-fluid section1">
        <div className="text">
          <h2>Our Rooms</h2>
          <button onClick={handleClick}>Return Home </button>
        </div>
      </div>
      <div className="container section2 px-md-5 px-3">
        <div className="row topText pt-5">
          <h3>Our Rooms</h3>
        </div>
        <div className="row search mb-5">
          <div className="col-2 box">
            <span>Check-In</span>
            <Startdate />
          </div>
          <div className="col-2 box">
            <span>Check-Out</span>
            <Enddate />
          </div>
          <div className="col-2 box">
            <span>Adult</span>
            <input
              type="number"
              value={adult}
              onChange={(e) => {
                console.log(e.target);
              }}
            />
          </div>
          <div className="col-2 box">
            <span>Kids</span>
            <input type="number" placeholder="Kids" />
          </div>
          <div className="col-2 box">
            <button className="searchBtn">Search</button>
          </div>
        </div>
          {rooms.map((value, index) => (
            <div className="row py-3 content" key={index}>
              <div className="col-md-3">
                <Link to={`/rooms/${value.id}`}>
                    <img style={{cursor:'pointer'}} className="img-fluid" src={value.imgSrc}/>
                </Link>
              </div>
              <div className="col-md-7">
                <h4>{value.title}</h4>
                <span>{value.text}</span>
                <ul>
                  <li>{value.size}</li>
                  <li>{value.bed}</li>
                </ul>
              </div>
              <div className="col-md-2">
                <span>From</span>
                <h4>${value.price}</h4>
                <Link to={`/rooms/${value.id}`}>
                    <button>More Info</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rooms;
