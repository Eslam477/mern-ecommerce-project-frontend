import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import consts from '../../../consts.js'
const initialState = {
    userData: {
        _id: null,
        userName: null,
    }
};
export const registerFun = createAsyncThunk("user/register", async (data, thunkAPI) => {
    const url = consts.server_url + 'collection/user/register';
    const result = await axios.post(
        url,
        {
            userName: data.userName,
            password: data.password
        }
    )
    return result
})
export const loginFun = createAsyncThunk("user/login", async (data, thunkAPI) => {
    const url = consts.server_url + 'collection/user/login'
    const result = await axios.post(
        url,
        {
            userName: data.userName,
            password: data.password
        }
    )

    if (result.data.actionDone) {
        const loginStatus = await data.singIn({
            expiresIn: 3600,
            authState: {
                _id: result.data.data._id,
                userName: result.data.data.userName,
            }
        })
        if (loginStatus) {
            data.navigate('/admin')
            return result
        }
    }
})


export const getUserCartFun = createAsyncThunk('user/getUserCart', async (data) => {
    const url = consts.server_url + 'collection/cart/getUserCart'
    const result = await axios.post(
        url,
        {
            _id: data._id
        }
    ).then((data) => data)
    return result
})

export const deleteProductFromCartFun = createAsyncThunk('product/deleteProductFromCart', async (data) => {
    const url = consts.server_url + 'collection/cart/deleteProductFromCart'
    await axios.post(
        url,
        {
            _id: data._id,
            productId: data.productId
        }
    ).then((x) => {
        if (x.data.actionDone) {
            window.location.reload();
        }
    })
})



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state, action) => {
            state.userData._id = null
            state.userData.userName = null
            action.payload.signOut()
            action.payload.navigate('/')

        },
        userInit: (state, action) => {
            if (action.payload.authData() !== null) {
                state.userData._id = action.payload.authData()._id
                state.userData.userName = action.payload.authData().userName
            }
        }
    },
    extraReducers: {
        [registerFun.pending]: (state, action) => {
            console.log('loading.....')
        },
        [registerFun.fulfilled]: (state, action) => {
            alert(action.payload.data.msg)
        },
        [loginFun.pending]: (state, action) => {
            console.log('loading.....')
        },
        [loginFun.fulfilled]: (state, action) => {
            state.userData._id = action.payload.data.data._id
            state.userData.userName = action.payload.data.data.userName
            alert(action.payload.data.msg)
        }
    }
})


export const { logOut, userInit } = userSlice.actions
export default userSlice.reducer
