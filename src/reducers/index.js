import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import imageReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer
});

export default rootReducer;
