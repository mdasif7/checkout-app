import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './features/Navbar/Navbar';
import OrderSummaryView from './features/OrderSummaryView/OrderSummaryView'
import OrderDetailsPage from './features/OrderSummaryView/OrderDetailsPage'



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_ORDER_SUMMARY_VIEW' });
  }, []);
  let element = <h1>sssss</h1>
  return (
    <div className="App">
    <Navbar />
    <Switch>
    <Redirect exact path="/"  to='/home'/>
    <Route path="/home"  render={()=><div>Home Page</div>}/>
    <Route exact path="/orderSummary" component={OrderSummaryView}/>
    <Route exact path="/orderSummary/OrderDetails/:orderId" component={OrderDetailsPage}/>
    <Route path="*" render={()=><div>Page Not Found</div>}/>
    </Switch>
    </div>
  );
}

export default App;
