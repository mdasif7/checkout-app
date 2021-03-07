import {fork, all} from "redux-saga/effects";
import OrderSummaryViewSaga from '../features/OrderSummaryView/saga'

export default function* rootSaga(){
    yield all([
        fork(OrderSummaryViewSaga)
    ]);
}