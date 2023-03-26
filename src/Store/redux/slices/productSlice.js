import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit";
import axios from 'axios'
import consts from '../../../consts.js'

export const getProductsData = createAsyncThunk('product/getProductsData', async () => {
    const Url = `${consts.server_url}collection/products`
    return axios.get(Url).then((data) => {
        return data
    })
})


export const getProductData = createAsyncThunk('product/getProductData', async (args) => {
    const Url = `${consts.server_url}collection/product/${args.id}`
    return axios.get(Url).then((data) => {
        return data
    })
})
export const addToCart = createAsyncThunk('product/addToCart', async (args) => {
    const Url = `${consts.server_url}collection/addToCart`
    const reqArg = {
        userId: args.userId,
        productId: args.productId,
        productCount: args.productCount
    }
    return axios.post(Url, reqArg).then((data) => {
        return data
    })
})

const initialState = {
    productData: {
    },
    products: []
};
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProductsData.fulfilled]: (state, action) => {
            state.products = action.payload.data
        },
        [getProductData.pending]: (state, action) => {
            console.log('loading.....')
        },
        [getProductData.fulfilled]: (state, action) => {
            state.productData.id = action.payload.data._id
            state.productData.name = action.payload.data.name
            state.productData.description = action.payload.data.description
            state.productData.price = action.payload.data.price
            state.productData.count = action.payload.data.count
            state.productData.imgs = action.payload.data.imgs
        }
    }
})




export default productSlice.reducer
