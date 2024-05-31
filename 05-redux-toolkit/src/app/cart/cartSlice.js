import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { FAILED, IDLE, LOADING, SUCCEDED } from '../status'

export const fetchProducts = createAsyncThunk('/fetchProducts', async () => {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products?limit=12'
    )
    return response.data
  } catch (err) {
    console.log(err)
  }
})

const initialState = {
  status: IDLE,
  products: [],
  productList: [],
  productCount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productList = [...state.productList, action.payload]
      state.productCount += 1
    },
    removeProductFromCart: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      )
      state.productCount -= 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = LOADING
        console.log(action)
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = SUCCEDED
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FAILED
        console.log(action.error)
      })
  },
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
