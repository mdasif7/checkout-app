import { AllInbox } from '@material-ui/icons';

import { all, call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import {httpCall} from "../../services";
import {updateSummary} from './OrderSummaryViewSlice';
function* fetchOrderSummary() {
  const rows= '/mockData/orders.json';
  const response = yield call(httpCall, {
      url: rows,
      method:"GET"
  })
  console.log("rows",response)
  if(response.success){
  
    yield put(updateSummary(response.data))
  } else {
    alert("Something Went wrong")
  }
    
}
export function* watchOrder() {
  yield takeLatest('FETCH_ORDER_SUMMARY_VIEW', fetchOrderSummary);
}
export default function* () {
  yield all([watchOrder()]);
}
