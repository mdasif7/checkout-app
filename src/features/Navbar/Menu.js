import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  align: {
    display: 'inline-block',
    verticalAlign: 'bottom',
  },
  root: {
    marginRight: '10px',
  },
});
const SimpleMenu = ({ tabname }) => {
  let history = useHistory();
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant='overline'
        className={classes.align}
        onClick={handleClick}
      >
        {tabname}
      </Typography>
      <ExpandMore />
      {tabname !== 'Order Status' ? (
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      ) : (
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
        </Menu>
      )}
    </div>
  );
};
export default SimpleMenu;
