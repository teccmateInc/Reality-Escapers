import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
    isOpen : false,
    content : null,
    imgId : 0,
}
const modal = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
    //   searchItems : (state,action) =>{
    //       const search = action.payload;
    //       const state_ = current(state);
    //       let tempArr = [...state_.country];
    //       state.searchResults = tempArr.filter((oldVal) => {
    //           if (oldVal.text.toLowerCase().includes(search?.toLowerCase())) {
    //             return oldVal;
    //           }
    //         })
    //   },
      modalOpen : (state,action) =>{
        state.imgId = action.payload;
        state.isOpen = true;
      },
      modalClose : (state,action) =>{
        state.isOpen = false;
      }
    },
  });
  export const { modalOpen,modalClose } = modal.actions;
  export default modal.reducer;