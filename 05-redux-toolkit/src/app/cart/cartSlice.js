import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      state.productList.filter((product) => product.id !== action.payload)
      state.productCount -= 1
    },
  },
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions

export default cartSlice.reducer
