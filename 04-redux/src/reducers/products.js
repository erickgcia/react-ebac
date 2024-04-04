const initialState = {
  products: [],
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case 'REMOVE_PRODUCTS':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      }
    default:
      return state
  }
}
