import { createSlice } from '@reduxjs/toolkit';
import _ from "lodash";

const initialState = {
  countries: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCountriesData:(state, {payload})=>{
        _.set(state, "countries", payload);
    } 
  }
});

export const { setCountriesData } = homeSlice.actions;

export default homeSlice.reducer;
