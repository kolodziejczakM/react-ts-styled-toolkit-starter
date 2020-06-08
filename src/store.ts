import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { counterReducer } from './modules/counter/counter.redux';
//<-- IMPORT MODULE STATE -->

const rootReducer = combineReducers({
    counter: counterReducer,
    //<-- INJECT MODULE STATE -->
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export type AppState = ReturnType<typeof rootReducer>;

export { useSelector, useDispatch };
