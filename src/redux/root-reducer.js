import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducter from './cart/cart.reducer';

export default combineReducers ({
    user:userReducer,
    cart: cartReducter
});

