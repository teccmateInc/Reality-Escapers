import React, { useState } from "react";
import {
  Grid,
  CardMedia,
  Select,
  MenuItem,
  Box,
  FormControl,
  Typography,
} from "@mui/material";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import {ImLinkedin2} from "react-icons/im";
import { NavLink as Link} from "react-router-dom";
import { LANGUAGES,CURRENCY,PAYCARDS } from "../helper/constant";
const Footer = () => {
  
  const [Languages, setLanguages] = useState(LANGUAGES[0]);
  const [Currency, setCurrency] = useState(CURRENCY[0]);
  const languageChange = (e) => {
    setLanguages(e.target.value);
  };
  const currencyChange = (e)=>{
    setCurrency(e.target.value);
  }
  return (
    <Grid container xs={12} className="Footer">
      <Grid container md={4} lg={3} className="section1">
        <Typography className="typography">Country</Typography>
        <Box sx={{ minWidth: "100%" }}>
          <FormControl fullWidth>
            <Select
              value={Languages}
              onChange={languageChange}
            >
              {LANGUAGES.map((value, i) => {
                return <MenuItem key={i} value={value}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Typography className="typography">Currency</Typography>
        <Box sx={{ minWidth: "100%"}}>
          <FormControl fullWidth>
            <Select
              value={Currency}
              onChange={currencyChange}
            >
              {CURRENCY.map((value, i) => {
                return <MenuItem key={i} value={value}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Typography style={{color:"White",fontSize:"0.9em",marginTop:"5%"}}>© 2015 – 2021 RealityEscapers. Made in Pakistan.</Typography>
      </Grid>
        <Grid container md={4} lg={2} className="section2">
            <Typography className="typography">Mobile</Typography>
            <div className="img">
                <img src="/assets/rooms/googlePlay.png"/>
                <img src="/assets/rooms/appStore.png"/>
            </div>
        </Grid>  
        <Grid container xs={6} md={4} lg={2} className="section3">
            <Typography style={{width:"100%"}} className="typography">Support</Typography>
            <Typography className="list" variant="h7">Contact</Typography>
            <Link to="/collage">
                <Typography className="list" variant="h7">Collage</Typography>
            </Link>
            <Typography className="list" variant="h7">Price</Typography>
            <Typography className="list" variant="h7">Terms of Use</Typography>
        </Grid>  
        <Grid container xs={6} md={4} lg={2}  className="section4">
            <Typography className="typography">Company</Typography>
            <Link to="/about" className="list">
                <Typography variant="h7">About us</Typography>
            </Link>
            <Link to="/rooms" className="list">
                <Typography variant="h7">Rooms</Typography>
            </Link>
            <Link to="/countries" className="list">
                <Typography variant="h7">Countries</Typography>
            </Link>
        </Grid>  
      <Grid container md={4} lg={3} className="section5">
          <Grid container xs={12} className="text">
            <Typography className="typography">Work With Us</Typography>
                  <Typography style={{padding:"10px 0"}} className="list" variant="h7">Become a supplier</Typography>
                  <Typography style={{padding:"10px 0"}} className="list" variant="h7">Become a Affilate partner</Typography>
                  <Typography style={{fontSize: "1.1em",fontWeight:600,color:"white"}} variant="h7">Ways You Can Pay</Typography>
          </Grid>
          <Grid container xs={12} sm={8} className="payCards">
          {
                  PAYCARDS.map(value=>(
                  <Grid container xs={2} md={3}>
                  <CardMedia style={{padding:"5px"}}
                  className="payCardImg"
                  component="img"
                  image={value}
                  />
                  </Grid>
                  ))
                }
          </Grid>
          <Grid container xs={12} className="icons">
            <Grid container xs={2} className="iconsItems"><FaFacebookF/></Grid>
            <Grid container xs={2} className="iconsItems"><BsInstagram/></Grid>
            <Grid container xs={2} className="iconsItems"><AiOutlineTwitter/></Grid>
            <Grid container xs={2} className="iconsItems"><ImLinkedin2/></Grid>
          </Grid>
                 
      </Grid>  
    </Grid>
  );
};

export default Footer;
