import {plpSectionData} from '../../data/plpSectionData';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../actionTypes/wishlistActionTypes';

const initialState = {
  products: plpSectionData,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        products: action.data,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
};

export {wishlistReducer};
