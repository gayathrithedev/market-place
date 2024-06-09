// toolkit
import {configureStore} from '@reduxjs/toolkit';

// reducers
import {wishlistReducer} from './reducers/wishlistReducer';

export default configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
