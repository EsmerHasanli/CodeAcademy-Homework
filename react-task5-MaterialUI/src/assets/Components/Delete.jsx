import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { deleteAlbumsByID } from '../api/albumsrequests';

const Delete = ({ album, albums, setAlbums }) => {
  
    const handleDelete = async (e) => {
        
    e.target.parentElement.parentElement.parentElement.remove();

    const albumID = album.id;

    await deleteAlbumsByID(albumID);

    const notDeletedAlbums = albums.filter((x) => x.id != albumID);
    setAlbums([...notDeletedAlbums]);

  };

  return (
    <>
      <Button onClick={handleDelete} size="small">
        Delete
      </Button>
    </>
  );
};

export default Delete;
