import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: []
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCountriesData:(state, action)=>{
        state.countries = action.payload;
    } 
  }
});

export const { setCountriesData } = homeSlice.actions;

export default homeSlice.reducer;
