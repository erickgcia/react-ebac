import shoes1 from '../assets/img/product-shoes-1.png'
import shoes2 from '../assets/img/product-shoes-2.png'
import shoes3 from '../assets/img/product-shoes-3.png'
import shoes4 from '../assets/img/product-shoes-4.png'
import shoes5 from '../assets/img/product-shoes-5.png'
import shoes6 from '../assets/img/product-shoes-6.png'
const initialState = {
  products: [
    {
      img: shoes1,
      id: 100101,
      itemStatus: 'Just In',
      title: 'Nike Air Max Dn',
      description: "Women's Shoes",
      colors: 9,
      price: 150,
    },
    {
      img: shoes2,
      id: 100102,
      itemStatus: 'Best Seller',
      title: 'Nike Dunk Low Retro',
      description: 'Skate Shoes',
      colors: 7,
      price: 130,
    },
    {
      img: shoes3,
      id: 100103,
      itemStatus: 'Just In',
      title: 'Nike Zoom Vomero 5 SE',
      description: 'Easy On/Off Shoes',
      colors: 3,
      price: 220,
    },
    {
      img: shoes4,
      id: 100104,
      itemStatus: 'Coming Soon',
      title: 'Nike Air Max 1',
      description: "Men's Shoes",
      colors: 1,
      price: 150,
    },
    {
      img: shoes5,
      id: 100105,
      itemStatus: 'Just In',
      title: 'Nike Air More Tempo',
      description: 'Shoes',
      colors: 1,
      price: 100,
    },
    {
      img: shoes6,
      id: 100106,
      itemStatus: 'Coming Soon',
      title: 'Nike Calm',
      description: "Men's Slides",
      colors: 8,
      price: 50,
    },
  ],
  cart: [],
  cartVisible: false,
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case 'REMOVE_PRODUCTS':
      return {
        ...state,
        cart: state.cart.filter(
          (cartProduct) => cartProduct.id !== action.payload
        ),
      }
    case 'CHECK_CART':
      return {
        ...state,
        cartVisible: action.payload,
      }
    default:
      return state
  }
}
