import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import LoginModal from './LoginModal';
import { Button } from '@mui/material';
import Register from './Register';

export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Box>
  );

  const Container = styled(Box)({
    width: '900px',  
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  });
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Container>
       
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer('left', true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>

          {
            localStorage.getItem('user') ? 
            <>
              <span>{JSON.parse(localStorage.getItem('user')).username}</span>
              <Button style={{ color: "white" }} onClick={()=> {
                localStorage.removeItem('user')
                location.reload()
              }}>Logout</Button>
            </>
            : 
            <>
              <LoginModal/>
              <Register/>
            </>
          }

          
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </Box>
  );
}
