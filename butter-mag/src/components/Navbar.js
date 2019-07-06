import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <h2>News</h2>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="navigation">
      <div className="row">
        <div className="col-4">
          <Button className="fas fa-bars fa-3x" style={{color: 'gold'}}  onClick={toggleDrawer('left', true)}>&nbsp;</Button>
        </div>
        <div className="col-4">
          <Link to="/">
          <h1 className="logo-text text-center" style={{fontFamily: 'Lobster', color: 'gold'}}>Butter</h1>
          </Link>
        </div>
        <div className="col-4">
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
          </Drawer>
        </div>
      </div>
    </div>
  );
}

const Button = styled.button`
  background: transparent;
  border: none;
  padding-left: 20px;
  padding-top: 4px;
`
