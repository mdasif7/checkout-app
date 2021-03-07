import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { blue } from '@material-ui/core/colors';
import moment from 'moment'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginBottom: '80px',
  },
  active: {
    color: 'blue',
    border: 'none',
  },
  inactive: {
    color: 'grey',
    border: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  borderBottomBlue: {
    height: '2px',
    background: 'blue',
  },
  borderBottomGrey: {
    height: '2px',
    background: 'grey',
  },
  iconclass: {
    fontSize: '50px',
  },
  gridAlign: {
    textAlign: 'left',
    marginRight: '5px',
    height: 'fitContent',
  },
  imageClass: {
    height: '300px',
  },
  boldClass:{
    fontWeight:'bold'
  }
}));
const OrderSummaryCard = ({ order }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} lg={12} spacing={3}>
          <React.Fragment>
            <Grid item xs={12} lg={3}>
              <img
                src={order.imageUrl}
                alt='Image not available'
                className={classes.imageClass}
              />
            </Grid>
            <Grid container item xs={12} lg={9} spacing={3} style={{height: "fit-content"}}>
              <Grid container item xs={12} lg={9}>
                <Grid xs={3} lg={1} className={classes.gridAlign}>
                  <SaveAltIcon
                    className={`${
                      order.status === 'ordered'
                        ? classes.active
                        : classes.inactive
                    }`}
                    fontSize='large'
                  />
                  <div
                    className={`${
                      order.status === 'ordered'
                        ? classes.borderBottomBlue
                        : classes.borderBottomGrey
                    } ${classes.iconclass}`}
                  ></div>
                  Ordered
                </Grid>

                <Grid xs={3} lg={1} className={classes.gridAlign}>
                  <MotorcycleIcon
                    className={`${
                      order.status === 'shipped'
                        ? classes.active
                        : classes.inactive
                    }`}
                    fontSize='large'
                  />
                  <div
                    className={`${
                      order.status === 'shipped'
                        ? classes.borderBottomBlue
                        : classes.borderBottomGrey
                    } ${classes.iconclass}`}
                  ></div>
                  Shipped
                </Grid>
                <Grid xs={3} lg={1} className={classes.gridAlign}>
                  <HomeIcon
                    className={`${
                      order.status === 'delivered'
                        ? classes.active
                        : classes.inactive
                    }`}
                    fontSize='large'
                  />
                  <div
                    className={`${
                      order.status === 'delivered'
                        ? classes.borderBottomBlue
                        : classes.borderBottomGrey
                    } ${classes.iconclass}`}
                  ></div>
                  Delivered
                </Grid>
                <Grid xs ={3}lg={6}>
                
              </Grid>
              <Grid xs={12} lg={12} className={`${classes.gridAlign} `}>
                  Arriving/Arrived Date: {moment(order.items[0].estimatedShipDateRange.toDate).format('DD-MM-YYYY')}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign} ${classes.boldClass}`}>
                  {order.items[0].name}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                  {order.items[0].skuAttributes.model}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                  {order.items[0].skuAttributes.manufacturer}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign} `}>
                  {order.items[0].skuAttributes.color}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                  {order.items[0].skuAttributes.size}
                </Grid>
                <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                 <Link to={`/orderSummary/OrderDetails/${order.orderId}`}> Go to Order Details Page </Link>
                </Grid>
                
              </Grid>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummaryCard;
