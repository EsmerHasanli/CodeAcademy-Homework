import React from "react";
import style from "./style.module.css";
import {IconButton, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { styled,Box,} from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import CloseIcon from '@mui/icons-material/Close';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Container = styled(Box)({
    width: '2304px',  
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  });

const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [showInput, setShowInput]=React.useState(false)
  
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  return (
    <>
      <header className={style.navbar}>
        <div>
          <ul className={style.leftbar}>
            <li>Sign Up for Our Newsletter</li>
          </ul>
        </div>

        <div>
          <h1 className={style.heading}> TIME </h1>
        </div>

        <div>
          <ul className={style.rightbar}>
            <li className={style.a}> SIGN IN </li>
            <li>
              <button className={style.b}>SUBSCRIBE</button>
            </li>
          </ul>
        </div>
      </header>

        <nav className={style.navbar}>
          <div>
                {(['left'] as const).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon style={{color:'black'}}/></Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      <Box
                        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                        role="presentation"
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                      >
                        <List>
                          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                        <Divider />
                        <List>
                          {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Drawer>
                  </React.Fragment>
                ))}
          </div>

          {
            !showInput &&
            <div>
              <span className={style.newsletter}>SIGN UP FOR OUR IDEAS NEWSLETTER</span>
            </div>
          }

          <div>
            {
              showInput &&
              <div style={{display:'flex'}}>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search..."
                      inputProps={{ 'aria-label': 'Search...' }}
                    />

                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
                </Paper>
                <IconButton onClick={()=>setShowInput(!showInput)} aria-label="search">
                  <CloseIcon />
                </IconButton>
              </div>
            }
            {
              !showInput &&
              <>
                <IconButton onClick={()=>setShowInput(!showInput)} type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </>
            }
          </div>
        </nav>
      </>
  );
};

export default Navbar;
