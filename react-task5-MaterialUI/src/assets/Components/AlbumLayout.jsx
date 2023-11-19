import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const AlbumLayout = ({albums}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [favoriteAlbums, setFavAlbums] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);

  const Container = styled(Box)({
    width: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const showFavsFn = () => {
    const userFavs = JSON.parse(localStorage.getItem("user")).wishlistItems;

    let i = 0;
    const favAlbums = [];
    while (i < userFavs.length) {
      favAlbums.push(albums.find((a) => a.id === userFavs[i]));
      i++;
    }

    setFavAlbums(favAlbums);
    setShowWishlist(true);
  };

  return (
    <Container>
      <h1>Album layout</h1>
      <p style={{ width: "550px", textAlign: "center" }}>
        Something short and leading about the collection below—its contents, the creator, etc.
        Make it short and sweet, but not too short so folks don't simply skip over it entirely.
      </p>
      {!user && (
        <>
          <div style={{display:"flex"}}>
          <Button variant="contained" style={{ margin: "10px" }}>
            Main call to action
          </Button>
          <Button style={{ margin: "10px" }} variant="outlined">Secondary action</Button>
          </div>
        </>
      )}

      {user && !user.isAdmin && (
        <>
          <div style={{display:"flex"}}>
            
          <Button onClick={showFavsFn} variant="contained" style={{ margin: "10px" }}>
            Show wishlist items
          </Button>
          {showWishlist && (
            <ul>
              {favoriteAlbums.map((album) => (
                <li key={album.id}>{album.name}</li>
              ))}
            </ul>
          )}
          <Button style={{ margin: "10px" }} variant="outlined" onClick={() => setShowWishlist(false)}>
            Hide wishlist items
          </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default AlbumLayout;
