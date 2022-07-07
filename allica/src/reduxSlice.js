import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rowClicked: false,
    charData: {},

  };

export const charSlice = createSlice({
    name: 'char',
    initialState,
    reducers: {
      charData: (state, data) => {
          console.log("state",state, data)
        state.charData = data.payload.data;
        state.rowClicked = true;
      },
    },
  });

  export const { charData } = charSlice.actions;
  export default charSlice.reducer;