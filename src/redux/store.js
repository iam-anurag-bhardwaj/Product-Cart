// import {createStore} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddlewear from "redux-saga";

const sagaMiddlewear = createSagaMiddlewear();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddlewear],
});

sagaMiddlewear.run(productSaga);
export default store;
