import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  country: [
    {
      id: 1,
      imgSrc: "/assets/images/Italy.jpeg",
      title: "Transfer",
      text: "Rome: Shuttle Bus Transfer to or from Fiumicino Airport",
      facilities: {
        guide: "Skip the line",
        duration: "Duration: 1 hour",
      },
      rating: 4.4,
      reviews: "(1,002 reviews)",
      from: "From",
      price: 12000,
      person: "2 persons",
    },
    {
      id: 2,
      imgSrc: "/assets/images/London.jpeg",
      title: "Guided Tour",
      text: "London: Jack the Ripper Interactive Guided Walking Tour",
      facilities: {
        guide: "Skip the line",
        duration: "Duration: 2 hours",
      },
      rating: 4.5,
      reviews: "(989 reviews)",
      from: "From",
      price: 11000,
      person: "per person",
    },
    {
      id: 3,
      imgSrc: "/assets/images/Turkey.jpeg",
      title: "Entry Ticket",
      text: "Cappadocia Hot Air Balloon Sunrise Flight",
      facilities: {
        group: "Small group",
        transport: "Pickup available",
        duration: "Duration: 2.5 - 3 hours",
      },
      rating: 4.7,
      reviews: "(756 reviews)",
      from: "From",
      price: 10000,
      person: "per person",
    },
    {
      id: 4,
      imgSrc: "/assets/images/California.jpeg",
      title: "WATER ACTIVITY",
      text: "San Francisco: Golden Gate Bay Cruise",
      facilities: {
        duration: "Duration: 1 hour",
        guide: "Optional audio guide",
      },
      rating: 4.1,
      reviews: "(1,229 reviews)",
      from: "From",
      price: 16000,
      person: "3 persons",
    },
  ],
  rooms: [
    {
      id: 1,
      title: "Junior Suite",
      text: "Our Junior Suites offer breathtaking views of the city skyline.",
      size: " Size: 230 sq ft",
      bed: " Beds: 1 Double(s)",
      imgSrc: "/assets/rooms/img1(i).jpeg",
      price: 150,
    },
    {
      id: 2,
      title: "Standard Room",
      text: "Our Standard Rooms are the perfect combination of function and comfort.",
      size: " Size: 260 sq ft",
      bed: " Beds: 2 Double(s",
      imgSrc: "/assets/rooms/img2(i).jpeg",
      price: 250,
    },
    {
      id: 3,
      title: "Superior Room",
      text: "Our Superior Rooms are comfortable, roomy and elegant.",
      size: " Size: 280 sq ft",
      bed: " Beds: 1 King(s)",
      imgSrc: "/assets/rooms/img3(i).jpeg",
      price: 350,
    },
  ],
  roomsDetails: [
    {
      imgSrc: "/assets/rooms/img1(i).jpeg",
      imgSrc: "/assets/rooms/img1(ii).jpeg",
      imgSrc: "/assets/rooms/img1(iii).jpeg",
    },
  ],
  searchResults: [],
};

const reducers = createSlice({
  name: "action",
  initialState: initialState,
  reducers: {
    searchItems : (state,action) =>{
        const search = action.payload;
        const state_ = current(state);
        let tempArr = state_.searchResults.length > 0 ? [...state_.searchResults] : [...state_.country];
        state.searchResults = tempArr.filter((oldVal) => {
            if (oldVal.text.toLowerCase().includes(search?.toLowerCase())) {
              return oldVal;
            }
          })
        const length = state.searchResults.length;
    },
    low_to_high: (state, action) => {
      const state_ = current(state);
      let tempArr = state_.searchResults.length > 0 ? [...state_.searchResults] : [...state_.country];
      state.searchResults = tempArr.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    high_to_low: (state, action) => {
      const state_ = current(state);
      let tempArr = [...state_.country];
      state.searchResults = tempArr.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    rating: (state,action) =>{
        const state_ = current(state);
        let tempArr = state_.searchResults.length > 0 ? [...state_.searchResults] : [...state_.country];
        state.searchResults = tempArr.sort(function (a, b) {
            return b.rating - a.rating;
          });
    },
    recommend : (state,action) =>{
        const state_ = current(state);
        let tempArr = [...state_.country];
        state.searchResults = tempArr.map(value=>{return value})
        console.log(state.searchResults)
        
    }
  },
});
export const { searchItems,low_to_high, high_to_low,rating,recommend } = reducers.actions;
export default reducers.reducer;
