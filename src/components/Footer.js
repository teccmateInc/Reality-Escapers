import React, { useState } from "react";
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl,
  Typography,
} from "@mui/material";
import {FaFacebookF} from "react-icons/fa";
const Footer = () => {
  const languages = [
    "English (United States)",
    "Dansk",
    "Deutsch (Österreich)",
    "English (United Kingdom)",
    "Italiano",
  ];
  const currency = [
      "Pakistani rupee",
      "Dollaro USA (US$)",
      "Indian rupee"
  ]
  const [Languages, setLanguages] = useState(languages[0]);
  const [Currency, setCurrency] = useState(currency[0]);
  const languageChange = (e) => {
    setLanguages(e.target.value);
  };
  const currencyChange = (e)=>{
    setCurrency(e.target.value);
  }
  return (
    <Grid container xs={12} className="Footer">
      <Grid container xs={4} className="segment1">
        <Typography className="typography">Country</Typography>
        <Box sx={{ minWidth: "100%" }}>
          <FormControl fullWidth>
            <Select
              value={Languages}
              onChange={languageChange}
            >
              {languages.map((value, i) => {
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
              {currency.map((value, i) => {
                return <MenuItem key={i} value={value}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Box>
        <Typography style={{color:"White",fontSize:"0.9em",marginTop:"15%"}}>© 2015 – 2021 RealityEscapers. Made in Pakistan.</Typography>
      </Grid>
      <Grid container xs={8} className="segment2">
        <Grid container xs={3} className="section1">
            <Typography className="typography">Mobile</Typography>
            <img src="/assets/rooms/googlePlay.png"/>
            <img src="/assets/rooms/appStore.png"/>
        </Grid>  
        <Grid container xs={3} className="section2">
            <Typography style={{width:"100%"}} className="typography">Support</Typography>
            <Typography className="list" variant="h7">Contact</Typography>
            <Typography className="list" variant="h7">Legal</Typography>
            <Typography className="list" variant="h7">Price</Typography>
            <Typography className="list" variant="h7">Terms of Use</Typography>
        </Grid>  
        <Grid container xs={3} className="section3">
            <Typography className="typography">Company</Typography>
            <Typography className="list" variant="h7">About us</Typography>
            <Typography className="list" variant="h7">Career</Typography>
            <Typography className="list" variant="h7">Blog</Typography>
        </Grid>  
      <Grid container xs={3} className="section4">
        <Typography className="typography">Work With Us</Typography>
            <Typography className="list" variant="h7">Become a supplier</Typography>
            <Typography className="list" variant="h7">Become a Affilate partner</Typography>
            <Typography style={{fontSize: "1.1em",fontWeight:600,color:"white"}} variant="h7">Ways You Can Pay</Typography>
            <FaFacebookF/>
      </Grid>  
      </Grid>
    </Grid>
  );
};

export default Footer;
