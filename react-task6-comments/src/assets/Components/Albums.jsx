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
import { Grid, Rating, TextField } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Edit from './Edit.jsx';
import Delete from './Delete.jsx';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddNewAlbum from './AddNewAlbum.jsx';
import AddToFAvorites from './AddToFAvorites.jsx';
import { AddComment } from '@mui/icons-material';
import AddComments from './AddComments.jsx';

const Albums = ({ albums, setAlbums }) => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [search, setSearch] = useState('');
  const [sortByYear, setSortByYear] = useState([]);
  const [sortType, setSortType] = useState('');
  const [value, setValue] = useState(0);
  
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
      console.error(error);
    }
  }

  useEffect( () => {
    
    fetchAllAlbums();
  }, []);

  useEffect(() => {
    if(!search){
      fetchAllAlbums()
    }
    else{
      
      const searchedAlbums = albums.filter((album)=> album.name.toLowerCase().trim().includes(search.toLowerCase().trim()) )
      setAlbums(searchedAlbums)
    }
  }, [search]);

  const handleSortByYear = () => {
    const sortedByYear = albums.sort((a, b)=> Number(a.year) - Number(b.year));
    setSortByYear(sortedByYear)
    console.log(sortedByYear);
  }


  const handleChange = async (event) => {
    const type = event.target.value
    setSortType(type);
    const allAlbums = await getAllAlbums()
    if (type == "All") {
      setAlbums(allAlbums)
    }
    else {
      const findedByGenre = allAlbums.filter((album) => album.genre.toLowerCase() == type.toLowerCase())
      console.log(findedByGenre)
      setAlbums(findedByGenre)
    }
  }

  return (
    <>
    {
      user && user.isAdmin==true &&      
      <AddNewAlbum setAlbums={setAlbums} />
    }
      <div style={{margin:"20px 0", display:"flex", justifyContent:"center"}}>
      {/* search input */}
      <TextField
      onChange={(e)=>setSearch(e.target.value)}
      value = {search}
      type="text"
      id="search"
      label="search"
      variant="outlined"
      autoComplete="on"
      />
      {/* sort by year */}
      <Button onClick={handleSortByYear} style={{margin:"0px 20px"}} variant="outlined">sort by year</Button>
      {/* sort by genre */}
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by genre</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortType}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={"Classical"}>Classical</MenuItem>
          <MenuItem value={"Jazz"}>Jazz</MenuItem>
          <MenuItem value={"Blues"}>Blues</MenuItem>
          <MenuItem value={"Metal"}>Metal</MenuItem>
          <MenuItem value={"Reggae"}>Reggae</MenuItem>
          <MenuItem value={"Indie"}>Indie</MenuItem>
          <MenuItem value={"R&B"}>R&B</MenuItem>
          <MenuItem value={"Rock"}>Rock</MenuItem>
          <MenuItem value={"Country"}>Country</MenuItem>
          <MenuItem value={"Hip Hop"}>Hip Hop</MenuItem>
          <MenuItem value={"Pop"}>Pop</MenuItem>
          <MenuItem value={"Electronic"}>Electronic</MenuItem>
          <MenuItem value={"All"} >All</MenuItem>


        </Select>
      </FormControl>
      </Box>
      </div>
    <Container>
      <Grid container spacing={2} >
        {albums && albums.map((album) => (

          <Grid item xl={4} lg={4} md={6} xs={9}  key={album.id}>
               <Card style={{ marginBottom: '20px' }} xs={{ maxWidth: 345 }}>
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
                <CardActions style={{display: "flex", justifyContent: "start"}}>
                  {
                    !user &&
                    <>
                   
                      <Button size="small" href={album.link}>Listen</Button>
                      <Rating name="read-only"  value={Number(album.comments?.rate) || 0}   readOnly />
                      <span>({ album?.comments.length})</span>
                    </>
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
                    <div style={{display:"flex", alignItems:"center" }}> 
                     <div>
                     <AddToFAvorites album={album}/>
                     </div>
                     <div>
                     <AddComments album={album} />
                     </div>
                    </div>
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


