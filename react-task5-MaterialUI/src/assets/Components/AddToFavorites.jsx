import React, { useState, useEffect } from 'react';
import { getAllAlbums } from '../api/albumsrequests.js';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Edit from './Edit.jsx';
import Delete from './Delete.jsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddNewAlbum from './AddNewAlbum.jsx';


const AddToFAvorites = ({ album }) => {

  return (
    <>

        <Button size="small" onClick={handleAddToFav}><FavoriteBorderIcon/> <FavoriteIcon/> </Button>
    </>
  )
}

export default AddToFAvorites