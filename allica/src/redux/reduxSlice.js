import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    rowClicked: false,
    charList: [],
    charData: {},
    favList: [],

  };

export const charSlice = createSlice({
    name: 'char',
    initialState,
    reducers: {
      getCharListData: (state, data) => {
      state.charListData = data.payload.data;
    },
      charData: (state, data) => {
        state.charData = data.payload.data;
        state.rowClicked = true;
      },
      setFavListData: (state, data) => {
        state.favList.push({details:data.payload.data, favFlag: true});
    },
    removeFromFavListAction: (state, data) => {
      state.favList.splice(data.payload.data.index,1)
    }
    },
  });

  export const removeFromFavList = (data) => {
    return async (dispatch, getState) => {
         const currentState= getState().char.favList;

        currentState.map((ïtem, index)=>{
          if(ïtem.details.name === data.details.name){
            dispatch(removeFromFavListAction({data:{data,index}}))
          }
        })
    };
  };

  export const { getCharListData, charData, setFavListData,removeFromFavListAction } = charSlice.actions;
  export default charSlice.reducer;