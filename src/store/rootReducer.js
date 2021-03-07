import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import orderSummaryReducer from '../features/OrderSummaryView/OrderSummaryViewSlice'

const rootReducer = {
    counter: counterReducer,
    orderSummary: orderSummaryReducer

}

export default rootReducer