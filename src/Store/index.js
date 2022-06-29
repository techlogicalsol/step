import {createStore, combineReducers} from 'redux';
import ProductsReducerM from './Reducers/ProductsReducerM';
import ProductsReducerW from './Reducers/ProductsReducerW';
import CartReducer from './Reducers/CartReducer';
import ProductsReducerA from './Reducers/ProductsReducerA';


const root = combineReducers({
    ProductsReducerM,
    ProductsReducerW,
    ProductsReducerA,
    CartReducer
});

const store = createStore(root)

export default store;