import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    data:[],
    status: 'idle'
};
const productSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
       
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            state.data=action.payload;
            state.status='idle'
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.status='error';
        })
        .addCase(getProducts.pending, (state, action)=>{
            state.status= 'Loading'
        })

    }
    
});
// export const {add, remove}=productSlice.actions;
export default productSlice.reducer;


export const getProducts =createAsyncThunk ('products/get', async () => {

    const apidata=await axios.get('https://fakestoreapi.com/products');
    const result=apidata.data;
    return result;
})

