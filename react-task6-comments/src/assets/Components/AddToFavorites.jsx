import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { putAlbumByID } from '../api/albumsrequests';

const AddToFAvorites = ({ album }) => {
  const [filled, setFilled] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data && data.wishlistItems.includes(album.id)) {
      setFilled(true);
    }
  }, [filled]);

  const handleClickFav = async () => {
    if (JSON.parse(localStorage.getItem("user")).wishlistItems?.includes(album.id)) {
      const user = JSON.parse(localStorage.getItem("user"));
      const filteredWhishlist = user.wishlistItems.filter((id) => id !== album.id);
      user.wishlistItems = filteredWhishlist;
      await putAlbumByID(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
      setFilled(false);
      setSnackbarOpen(true); 
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      user.wishlistItems.push(album.id);
      await putAlbumByID(user.id, user);
      localStorage.setItem("user", JSON.stringify(user));
      setFilled(true);
      setSnackbarOpen(true); 
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Button size="small" onClick={handleClickFav}>
        {filled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000} 
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          {filled ?   'Album added to favorites' :  'Album removed from favorites'}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AddToFAvorites;
