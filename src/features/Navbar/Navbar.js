import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SimpleMenu from './Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [showOtherMenu, setshowOtherMenu] = useState(false);
  let history = useHistory();
  const onClickShowOther = () => {
    setshowOtherMenu(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (text) => {
    setAnchorEl(null);
    if (text) {
      history.push(`/${text}`);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose('orderSummary')}>
              Recent Order Summary View
            </MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          {showOtherMenu && <SimpleMenu tabname={'Brands'} />}

          <div className='viewport-class'>
            <SimpleMenu tabname={'Account'} />
          </div>
          <div className='viewport-class'>
            <SimpleMenu tabname={'Recently Viewed'} />
          </div>
          <div className='viewport-class'>
            <SimpleMenu tabname={'Order Status'} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
