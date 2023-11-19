import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Snackbar, TextField } from "@mui/material";
import { postAlbum, getAllAlbums } from "../api/albumsrequests.js"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const AddNewAlbum = ({ setAlbums }) => {
    const [open, setOpen] = React.useState(false);
    const [newAlbum, setNewAlbum] = React.useState({
        name: '',
        artistName: '',
        year: '',
        genre: '',
        albumCover: '',
        link: "https://open.spotify.com/"
    });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitChanges = async (e) => {
    e.preventDefault();
    
    if(!newAlbum.name || !newAlbum.artistName || !newAlbum.year || !newAlbum.genre || !newAlbum.albumCover){
        alert('empty inputs')
      }else{

        await postAlbum( newAlbum )
        setOpen(false)
        
        const albums = await getAllAlbums()
  
        setAlbums(albums)  
      }

  };

  return (
    <>
    <Button onClick={handleOpen} style={{display:"block", margin:"10px auto"}}>Add Album</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
            <TextField
              onChange={(e) => setNewAlbum({...newAlbum, name: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={newAlbum.name}
              type="text"
              id="name"
              label="name"
              variant="outlined"
              autoComplete="on"
            />
            <TextField
              onChange={(e) => setNewAlbum({...newAlbum, artistName: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={newAlbum.artistName}
              type="text"
              id="artist"
              label="artist"
              variant="outlined"
              autoComplete="on"
            />
             <TextField
              onChange={(e) => setNewAlbum({...newAlbum, year: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={newAlbum.year}
              type="text"
              id="year"
              label="year"
              variant="outlined"
              autocomplete="on"
            />
             <TextField
              onChange={(e) => setNewAlbum({...newAlbum, genre: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={newAlbum.genre}
              type="text"
              id="genre"
              label="genre"
              variant="outlined"
              autoComplete="on"
            />
            <TextField
              onChange={(e) => setNewAlbum({...newAlbum, albumCover: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={newAlbum.albumCover}
              type="text"
              id="albumCover"
              label="albumCover"
              variant="outlined"
              autoComplete="on"
            />
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <Button onClick={handleSubmitChanges} type="submit">  Add new album </Button>
              <Button onClick={()=> setOpen(false)} type="reset">  Cancel </Button>
            </div>
        </Box>
      </Modal>
    </>
  )
}

export default AddNewAlbum