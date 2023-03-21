import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import userSlice from './slices/userSlice'


const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

var store = configureStore({

    reducer: {
        productSlice,
        userSlice
    },
    middleware: customizedMiddleware
})
export default store