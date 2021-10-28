import React from "react";
import { useSelector } from "react-redux";
import { Card,CardActions,CardContent,CardMedia,Typography, Button,Grid,Item } from "@mui/material";
import { useHistory } from "react-router";

const Home = () => {
  
  const country = useSelector((state) => state.filterSlice.country);
  const history = useHistory();
  const handleClick = () => {
    history.push("/countries");
  };
  return (
    <div>
      <div className="Home">
        <div className="homeContent">
          <h1>Traveling</h1>
          <p style={{margin: '15px 0'}}>Discover countries in the globe</p>
          <button onClick={handleClick} className="exploreBtn">
            Explore Now
          </button>
        </div>
      </div>
      <div className="container-fluid section-1">
        <div className="topText py-3 py-md-5 text-center">
          <h2>Popular Places</h2>
          <p>
            Suffered alteration in some form, by injected humour or good day{" "}
            <br /> randomised booth anim 8-bit hella wolf moon beard words.
          </p>
              <Grid container alignItems="center" justifyContent="center">
              {country.map((value, index) => (
                <Grid key={index} 
                xs={12} sm={6} lg={3} 
                sx={{ maxWidth: 420}}>
                    <Card sx={{margin : '20px'}}>
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
            </div>
          </div>
        </div>
  );
};

export default Home;
