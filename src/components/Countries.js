import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputDate } from "../helper/meta";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFreeCancellation } from "react-icons/md";
import CustomizedAccordions from "./countryDropDown";
import {
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import {
  searchItems,
  low_to_high,
  high_to_low,
  rating,
  clearSearch,
} from "../redux/reducers/reducer";

const Countries = () => {
  const states = useSelector((state) => state);
  let { country, searchResults } = states;
  let isSorting = Array.isArray(searchResults) && searchResults.length > 0;
  let data = isSorting ? searchResults : country;
  let length = isSorting ? searchResults.length : country.length;
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState("");
  const [searchTitle, setSearchTitle] = useState(["Search Item"]);
  const [menu, setMenu] = useState("");
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState();

  const handleSort = (event) => {
    setMenu(event.target.value);
    const value = event.target.value;
    if (value == "Price Low to High") {
      setEmpty("");
      dispatch(low_to_high());
    } else if (value == "Price High to Low") {
      setEmpty("");
      dispatch(high_to_low());
    } else if (value == "Ratings") {
      setEmpty("");
      dispatch(rating());
    } else if (value == "Clear Search") {
      setEmpty("");
      dispatch(clearSearch());
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSearch = () => {
    if (search === "") {
      setEmpty(<div>Fill the search box first</div>);
    } else if (search !== "") {
      setEmpty("");
      searchTitle.splice(searchTitle);
      setSearchTitle((oldval) => [...oldval, search]);
      dispatch(searchItems(search));
    }
  };
  const currentDate = new Date(),
    date =
      currentDate.getMonth() +
      1 +
      "/" +
      currentDate.getDate() +
      "/" +
      currentDate.getFullYear();
  return (
    <div className="countries">
      <Grid container>
        <Grid sx={{marginBottom:"50px"}} className="sideBar" container xs={12} lg={3}>
          <Grid container className="checkAvailability">
            <p>Enter your dates to find available activities</p>
            <InputDate className='datepicker' placeholder={"Check Availability"}/>
            <Button variant="contained" className="availableBtn">
              Check Availability
            </Button>
          </Grid>
          <Grid container className="cancelation">
            <div style={{width:"100%",textAlign:"center",padding:"10px 0"}} ><MdFreeCancellation style={{fontSize:"60px"}}/></div>
            <h5>Free cancellation</h5>
            <span>
              Change of plans? No problem. Cancel up to 24 hours before your
              activity starts for a full refund.
            </span>
          </Grid>
          <Grid sx={{minHeight:"200px"}} className="sideMenu">
              <CustomizedAccordions/>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          lg={9}
          alignItems="center"
          justifyContent="center"
        >
          <Grid container className="header">
            <Grid xs={12} sm={6} className="searchedText">
              <div style={{ padding: "10px 0" }} className="searchTitle">
                <h3>"{searchTitle}"</h3>
              </div>
              <div className="searchCounts">
                <p style={{ color: "gray" }}>
                  {length} activities found
                </p>
              </div>
            </Grid>
            <Grid xs={12} sm={6} className="accordian">
              <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={menu}
                  label="Sort By"
                  onChange={handleSort}
                >
                  <MenuItem value={"Price Low to High"}>
                    Price Low to High
                  </MenuItem>
                  <MenuItem value={"Price High to Low"}>
                    Price High to Low
                  </MenuItem>
                  <MenuItem value={"Ratings"}>Ratings</MenuItem>
                  <MenuItem value={"Clear Search"}>Clear Search</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid xs={12} className="searchBox">
            <input
              type="text"
              placeholder="Where are you going ?"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <span onClick={handleSearch}>
              <BiSearchAlt2 />
            </span>
          </Grid>
          <Grid xs={12} display="flex" justifyContent="center">
            {empty}
          </Grid>
          {data.map((value, index) => (
            <Grid className="card" container key={index} xs={12}>
              <Grid className="imgGrid" sm={3}>
                <CardMedia
                  className="img"
                  component="img"
                  alt={value.title}
                  image={value.imgSrc}
                />
              </Grid>
              <Grid xs={6}>
                <CardContent>
                  <Typography className="title" gutterBottom variant="h5">
                    {value.title}
                  </Typography>
                  <Typography className="text" gutterBottom variant="h5">
                    {value.text}
                  </Typography>
                  <Typography className="facilities" gutterBottom variant="h5">
                    {value.facilities.group}
                  </Typography>
                  <Typography className="facilities" gutterBottom variant="h5">
                    {value.facilities.transport}
                  </Typography>
                  <Typography className="facilities" gutterBottom variant="h5">
                    {value.facilities.guide}
                  </Typography>
                  <Typography className="facilities" variant="h5">
                    {value.facilities.duration}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid xs={6} sm={3}>
                <CardContent sx={{ float: "right", textAlign: "right" }}>
                  <Typography gutterBottom variant="h6">
                    <div
                      style={{
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1.1rem",
                      }}
                    >
                      {value.rating}
                      <Rating
                        sx={{ fontSize: "1.2rem" }}
                        value={value.rating}
                        readOnly
                        precision={0.5}
                      />
                    </div>
                  </Typography>
                  <Typography sx={{ fontSize: "0.7em" }}>
                    {value.reviews}
                  </Typography>
                  <Typography>{value.from}</Typography>
                  <Typography sx={{ fontWeight: "800" }}>
                    <h3>Rs:{value.price}/:</h3>
                  </Typography>
                  <Typography sx={{ fontSize: "0.9em" }}>
                    {value.person}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Countries;
