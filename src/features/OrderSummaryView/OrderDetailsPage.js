import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from './OrderSummaryViewSlice';
import HomeIcon from '@material-ui/icons/Home';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
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
  boldClass: {
    fontWeight: 'bold',
  },
}));
const OrderDetailsPage = () => {
  const classes = useStyles();
  const orders = useSelector(getOrders);
  const params = useParams();
  const [pageOrder, setpageOrder] = useState({});
  const history = useHistory();
  useEffect(() => {
    let temp = orders.filter(
      (item) => parseInt(params.orderId) === item.orderId
    )[0];
    setpageOrder(temp);
  }, [orders]);

  const onActionClick = () => {
    alert('Your order is cancelled and Page will redirect to Summary');
    history.push('/orderSummary');
  };
  return (
    <>
      <p className={classes.boldClass}>Order Details Page:</p>
      {pageOrder && Object.keys(pageOrder).length > 0 ? (
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} lg={12} spacing={3}>
              <React.Fragment>
                <Grid item xs={12} lg={3}>
                  <img
                    src={pageOrder.imageUrl}
                    alt='Image not available'
                    className={classes.imageClass}
                  />
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  lg={9}
                  spacing={3}
                  style={{ height: 'fit-content' }}
                >
                  <Grid container item xs={12} lg={9}>
                    <Grid xs={3} lg={1} className={classes.gridAlign}>
                      <SaveAltIcon
                        className={`${
                          pageOrder.status === 'ordered'
                            ? classes.active
                            : classes.inactive
                        }`}
                        fontSize='large'
                      />
                      <div
                        className={`${
                          pageOrder.status === 'ordered'
                            ? classes.borderBottomBlue
                            : classes.borderBottomGrey
                        } ${classes.iconclass}`}
                      ></div>
                      Ordered
                    </Grid>

                    <Grid xs={3} lg={1} className={classes.gridAlign}>
                      <MotorcycleIcon
                        className={`${
                          pageOrder.status === 'shipped'
                            ? classes.active
                            : classes.inactive
                        }`}
                        fontSize='large'
                      />
                      <div
                        className={`${
                          pageOrder.status === 'shipped'
                            ? classes.borderBottomBlue
                            : classes.borderBottomGrey
                        } ${classes.iconclass}`}
                      ></div>
                      Shipped
                    </Grid>
                    <Grid xs={3} lg={1} className={classes.gridAlign}>
                      <HomeIcon
                        className={`${
                          pageOrder.status === 'delivered'
                            ? classes.active
                            : classes.inactive
                        }`}
                        fontSize='large'
                      />
                      <div
                        className={`${
                          pageOrder.status === 'delivered'
                            ? classes.borderBottomBlue
                            : classes.borderBottomGrey
                        } ${classes.iconclass}`}
                      ></div>
                      Delivered
                    </Grid>
                    <Grid xs={3} lg={6}></Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign} `}>
                      Arriving/Arrived Date:{' '}
                      {moment(
                        pageOrder.items[0].estimatedShipDateRange.toDate
                      ).format('DD-MM-YYYY')}
                    </Grid>
                    <Grid
                      xs={12}
                      lg={12}
                      className={`${classes.gridAlign} ${classes.boldClass}`}
                    >
                      {pageOrder.items[0].name}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      {pageOrder.items[0].skuAttributes.model}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      {pageOrder.items[0].skuAttributes.manufacturer}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign} `}>
                      {pageOrder.items[0].skuAttributes.color}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      {pageOrder.items[0].skuAttributes.size}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      Items Ordered: {pageOrder.items.length}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      <span className={classes.boldClass}>
                        Shipping Address: {` `}
                      </span>
                      {pageOrder.shipingAddress.street},{' '}
                      {pageOrder.shipingAddress.city},
                      {pageOrder.shipingAddress.state},
                      {pageOrder.shipingAddress.zip}
                    </Grid>
                    <Grid xs={12} lg={12} className={`${classes.gridAlign}`}>
                      {pageOrder.status !== 'delivered' && (
                        <Button
                          variant='contained'
                          color='primary'
                          style={{ marginTop: '10px' }}
                          onClick={() => onActionClick()}
                        >
                          Cancel Your Order
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </React.Fragment>
            </Grid>
          </Grid>
        </div>
      ) : (
        'No Details'
      )}
    </>
  );
};

export default OrderDetailsPage;
