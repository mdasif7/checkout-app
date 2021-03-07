import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderSummaryCard from './OrderSummaryCard';
import {getOrders} from './OrderSummaryViewSlice'
const OrderSummaryView = () => {
  
const orders = useSelector(getOrders);
 
  console.log("orders0, ", orders)
  return <div className="Order-summary-wrapper">
     { orders && orders.length >0 &&

     orders.map(item => <OrderSummaryCard order={item}/>)
     } 
  </div>;
};

export default OrderSummaryView;
