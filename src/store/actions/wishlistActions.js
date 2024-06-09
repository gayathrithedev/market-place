// globals

import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../actionTypes/wishlistActionTypes';

const addToWishlist = data => ({
  type: ADD_TO_WISHLIST,
  data: data,
});

const removeWishlist = data => ({
  type: REMOVE_FROM_WISHLIST,
  data: data,
});

export {addToWishlist, removeWishlist};
