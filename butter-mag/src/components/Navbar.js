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
      <List>
        <Link to="/add-stories">
        <h2>Add Article</h2>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="navigation">
        <div style={{width: '33vw', display: 'inline-block'}}>
          <Button className="fas fa-bars fa-3x" style={{color: 'gold'}}  onClick={toggleDrawer('left', true)}>&nbsp;</Button>
        </div>
        <div className="text-center" style={{display: 'inline-block', width: '33vw'}}>
          <Link to="/" style={{textDecoration: 'none'}}>
          <h1 style={{fontFamily: 'Lobster', color: 'gold'}}>Butter</h1>
          </Link>
        </div>
        <div >
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {sideList('left')}
          </Drawer>
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
