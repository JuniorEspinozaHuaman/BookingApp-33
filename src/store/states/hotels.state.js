import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const hotelsSlice = createSlice({
    name:'hotels',
    initialState: null,
    reducers: {
        setHotelsG : (state, action) => action.payload
    }
})

export const { setHotelsG } = hotelsSlice.actions
export default hotelsSlice.reducer

export const getHotelsThunk = (url) => (dispatch) => {
    axios.get(url)
    .then( res => dispatch(setHotelsG(res.data)))
    .catch( err => console.log(err))
}