import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Snackbar, TextField } from "@mui/material";
import { putAlbumByID, getAllAlbums } from "../api/albumsrequests.js"

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

export default function Edit({ album, setAlbums }) {
  const [open, setOpen] = React.useState(false);
  const [ editedAlbum, setEditedAlbum ] = React.useState(album)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitChanges = async (e) => {
    e.preventDefault();

    if(!editedAlbum.name || !editedAlbum.artistName || !editedAlbum.year || !editedAlbum.genre){
      alert('empty inputs')
    }else{
      const editedAlbumID = editedAlbum.id
      await putAlbumByID(editedAlbumID, editedAlbum)
      setOpen(false)
      
      const albums = await getAllAlbums()


      setAlbums(albums)
      console.log(albums);

    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
            <TextField
              onChange={(e) => setEditedAlbum({...editedAlbum, name: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={editedAlbum.name}
              type="text"
              id="name"
              label="name"
              variant="outlined"
              autocomplete="on"
            />
            <TextField
              onChange={(e) => setEditedAlbum({...editedAlbum, artistName: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={editedAlbum.artistName}
              type="text"
              id="artist"
              label="artist"
              variant="outlined"
              autocomplete="on"
            />
             <TextField
              onChange={(e) => setEditedAlbum({...editedAlbum, year: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={editedAlbum.year}
              type="text"
              id="year"
              label="year"
              variant="outlined"
              autocomplete="on"
            />
             <TextField
              onChange={(e) => setEditedAlbum({...editedAlbum, genre: e.target.value})}
              style={{ marginBottom: "5px" }}
              value={editedAlbum.genre}
              type="text"
              id="genre"
              label="genre"
              variant="outlined"
              autocomplete="on"
            />
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <Button onClick={handleSubmitChanges} type="submit"> SUBMIT CHANGES </Button>
              <Button onClick={()=> setOpen(false)} type="reset"> DISCARD CHANGES </Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}