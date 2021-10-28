import React from 'react'
import { useParams } from 'react-router'
import { useSelector,useDispatch } from 'react-redux';
import {
    CardContent,
    Typography,
    Grid,
    Rating,
  } from "@mui/material";
  
import { modalOpen } from "../redux/reducers/modalReducer";
const CountriesDetails = () => {
    const {id} = useParams();
    const states = useSelector((state) => state.filterSlice);
    let { country } = states;
    const {title,text, rating, reviews, facilities,images } = country[id];
    const Fascilities = Object.keys(facilities).map(key=>facilities[key]);
    const dispatch = useDispatch();
    return (
        <Grid className="countryDetails">
            <CardContent className="card">
                  <Typography className="title" variant="h5">
                    {title}
                  </Typography>
                  <Typography className="text" variant="h5">
                    {text}
                  </Typography>
                  <Typography>
                  <div
                      style={{
                        display: "flex",
                        fontSize: "1rem",
                        fontWeight:"600"
                      }}
                    >
                        <Rating
                        sx={{ fontSize: "1.2rem" }}
                        value={rating}
                        readOnly
                        precision={0.5}
                        />
                        <span style={{margin :'0 15px'}}>{rating} / 5</span>
                        <span style={{color:"#134aa8"}}>{reviews}</span>
                    </div>
                  </Typography>
                  
            </CardContent>
            <Grid container className="images">
                <Grid
                onClick={()=>{
                  dispatch(modalOpen(0));
                }}
                  container md={8}>
                    <img style={{padding:"5px", cursor:"pointer", borderRadius:"10px 0 0 10px"}} width="100%" src={images[0]}/>
                </Grid>
                <Grid container md={4}>
                    <Grid
                    onClick={()=>{
                      dispatch(modalOpen(1));
                    }}
                     container md={12}>
                    <img style={{padding:"5px", cursor:"pointer", borderRadius:"0 10px 0 0"}}  width="100%" src={images[1]}/>
                    </Grid>
                    <Grid
                    onClick={()=>{
                      dispatch(modalOpen(2));
                    }}
                     container md={6}>
                    <img style={{padding:"5px", cursor:"pointer", borderRadius:"0 0 10px 0"}}  width="100%" src={images[2]}/>
                    </Grid>
                    <Grid
                    onClick={()=>{
                      dispatch(modalOpen(3));
                    }}
                     container md={6}>
                    <img style={{padding:"5px", cursor:"pointer", borderRadius:"0 0 10px 0"}}  width="100%" src={images[3]}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container md={8}>
              <Typography variant="h4" style={{width:'100%',fontWeight:"600",fontSize:"1.6em",margin:"1em 0"}}>About the ticket</Typography>
              {Fascilities.map((value,i)=>(
                <Typography className="list" variant="h6">{value}</Typography>
              ))}
            </Grid>
            <Grid container md={4}>
            </Grid>
        </Grid>
    )
}

export default CountriesDetails
