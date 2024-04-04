export const addProducts = (product) => {
  return {
    type: 'ADD_PRODUCTS',
    payload: product,
  }
}

export const removeProducts = (id) => {
  return {
    type: 'REMOVE_PRODUCTS',
    payload: id,
  }
}
