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

const Albums = ({ albums, setAlbums }) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [search, setSearch] = useState('');
  
  const Container = styled(Box)({
    width: '900px',  
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  


  async function fetchAllAlbums() {
    try {
      const allAlbums = await getAllAlbums();
      setAlbums(allAlbums);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  }

  useEffect(() => {
    fetchAllAlbums();
  }, []);

  useEffect(() => {
    if(!search){
      fetchAllAlbums()
    }else{
      const searchedAlbums = albums.map((album)=>{ 
        console.log(album)
        // album.name.toLowerCase().trim().includes(search.toLowerCase().trim())

      })
      setAlbums(searchedAlbums)

    }
  }, [search]);

  return (
    <>
    {
      user && user.isAdmin==true &&
      <Button style={{display:"block", margin:"10px auto"}}>Add Album</Button>
    }
      <TextField
      style={{display:"block", margin:"10px auto"}}
      onChange={(e)=>setSearch(e.target.value)}
      value = {search}
      type="text"
      id="search"
      label="search"
      variant="outlined"
      autocomplete="on"
      />
    <Container>
      <Grid container spacing={2}>
        {albums && albums.map((album) => (

          <Grid item xl={4} lg={4} md={6} xs={9}  key={album.id}>
              <Card style={{ marginTop: '20px' }} xs={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 175 }}
                  image={album.albumCover}
                  title="Album Cover"
                />
                <CardContent>
                  <Typography style={{height: "63px"}} gutterBottom variant="h5" component="div">
                    {album.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist: {album.artistName} <br />
                    Year: {album.year} <br />
                    Genre: {album.genre}
                  </Typography>
                </CardContent>
                <CardActions>
                  {
                    !user &&
                    <Button size="small" href={album.link}>Listen</Button>
                  }
                  {
                    user && user.isAdmin==true &&
                    <>
                      <Edit album={album} albums={albums} setAlbums={setAlbums}/>
                      <Delete album={album} albums={albums} setAlbums={setAlbums}/>
                    </>
                  }
                  {
                    user && user.isAdmin==false &&
                    <>
                     <Button size="small" href={album.link}>Listen</Button>
                     <Button size="small"><FavoriteBorderIcon/> <FavoriteIcon/> </Button>
                    </>
                  }
                </CardActions>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
  
};

export default Albums;


