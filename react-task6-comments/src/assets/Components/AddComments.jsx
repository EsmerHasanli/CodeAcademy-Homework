import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Box, Modal, Rating, TextField } from '@mui/material';
import { getAlbumsByID, putAlbumByID } from '../api/albumsrequests';
import { putUserByID } from '../api/usersrequests';

const AddComments = ({  album  }) => {
  const [open, setOpen] = useState(false);
  const [readonlyRatingValue, setReadonlyRatingValue] = useState(album.rating);
  const [value, setValue] = useState(0)
   const [commentsCount, setCommentsCount] = useState(album.comments.length)
  const [comment, setComment] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddComment = () => {
    handleOpen();
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const currentUser = JSON.parse(localStorage.getItem("user"))
      if (currentUser) {
        const currentAlbum = await getAlbumsByID(album.id)
        
          currentUser.comments.push({albumId:currentAlbum.id, comment, rate: Number(value)})
          localStorage.setItem("user", JSON.stringify(currentUser))
          await putUserByID(currentUser.id)

          let sumOfRatings = 0;
          let avgRating = 0;

          currentAlbum.comments.push(
            {
              userId: currentUser.id,
              comment,
              rate: Number(value)
            })

          
          currentAlbum.comments.forEach(comment => sumOfRatings += Number(comment.rate))
          console.log(sumOfRatings)
          avgRating = Math.ceil(sumOfRatings / currentAlbum.comments.length)
          currentAlbum.rating = avgRating
          await putAlbumByID(album.id, currentAlbum)
          setReadonlyRatingValue(avgRating)
          setValue(0)
          setComment("")
          setCommentsCount(currentAlbum.comments.length)

      }

      handleClose();
  };

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

  return (
    <>

      <div style={{display:"flex", alignItems:"center" }}>
      <Button onClick={handleAddComment} variant="text">
        <AddCommentOutlinedIcon />
      </Button>

      <Rating name="read-only" value={readonlyRatingValue} readOnly />
      <span>({commentsCount})</span>
      </div>
          

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <TextField
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              style={{ marginBottom: '10px' }}
              type="text"
              id="comment"
              label="Comment"
              variant="outlined"
              autoComplete="on"
            />

          <Rating
              style={{ marginBottom: '10px' }}
              name="simple-controlled"
              value={value}
              onChange={(event) => {
                setValue(Number(event.target.value));
              }}
            />    

            <Button
              style={{ marginBottom: '10px' }}
              type="submit"
              variant="contained"
            >
              Add Comment
            </Button>

            <Button onClick={handleClose} type="reset" variant="outlined">
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddComments;



// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
// import { Box, Modal, Rating, TextField } from '@mui/material';
// import { putAlbumByID } from '../api/albumsrequests';

// const AddComments = ({  album  }) => {
//   const [open, setOpen] = useState(false);

//   const [value, setValue] = useState(0);

//   const [comment, setComment] = useState('');


//   useEffect(() => {
//     const user =  JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       const rating = user.comments?.rate
//       // setValue(rating);
//     }
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleAddComment = () => {
//     handleOpen();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user.comments)
//     if (user.comments.albumId == album.id && user.comments.userId == user.id) {
//       alert("You already added your comment for this album");
//     }else{
//       user.comments.push({albumId: album.id, userId:user.id, comment: comment, rate:value});
//       await putAlbumByID(user.id, user);
//       localStorage.setItem("user", JSON.stringify(user));


//     }
    
//     handleClose();
//   };

//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <>

//       <div style={{display:"flex", alignItems:"center" }}>
//       <Button onClick={handleAddComment} variant="text">
//         <AddCommentOutlinedIcon />
//       </Button>

//       <Rating name="read-only" value={value} readOnly />

//       <span>({album.comments.length})</span>

//       </div>
          

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//             }}
//           >
//             <TextField
//               onChange={(e) => setComment(e.target.value)}
//               value={comment}
//               style={{ marginBottom: '10px' }}
//               type="text"
//               id="comment"
//               label="Comment"
//               variant="outlined"
//               autoComplete="on"
//             />

//           <Rating
//               style={{ marginBottom: '10px' }}
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />    

//             <Button
//               style={{ marginBottom: '10px' }}
//               type="submit"
//               variant="contained"
//             >
//               Add Comment
//             </Button>

//             <Button onClick={handleClose} type="reset" variant="outlined">
//               Cancel
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default AddComments;


// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
// import { Box, Modal, Rating, TextField } from '@mui/material';
// import { putAlbumByID } from '../api/albumsrequests';

// const AddComments = ({  album  }) => {
//   const [open, setOpen] = useState(false);

//   const [value, setValue] = useState(0);

//   const [comment, setComment] = useState('');


//   useEffect(() => {
//     const storedValue = localStorage.getItem('user').comments?.rate;
//     if (storedValue !== null) {
//       setValue((storedValue));
//     }
//   }, []);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const handleAddComment = () => {
//     handleOpen();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = JSON.parse(localStorage.getItem("user"));
//     const userComment = JSON.parse(localStorage.getItem("user")).comments.albumId

//     if(user.comments.length && userComment==album.id && user.comments.userId==userComment.id ){
//       alert("You already added your coomnent");
//     }else{
//       user.comments.push({albumId: album.id, userId:user.id, comment: comment, rate:value});
//       await putAlbumByID(user.id, user);
//       localStorage.setItem("user", JSON.stringify(user));

//     }
    
//     handleClose();
//   };

//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <>

//       <div style={{display:"flex", alignItems:"center" }}>
//       <Button onClick={handleAddComment} variant="text">
//         <AddCommentOutlinedIcon />
//       </Button>

//       <Rating name="read-only" value={value} readOnly />

//       <span>({album.comments.length})</span>

//       </div>
          

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexDirection: 'column',
//             }}
//           >
//             <TextField
//               onChange={(e) => setComment(e.target.value)}
//               value={comment}
//               style={{ marginBottom: '10px' }}
//               type="text"
//               id="comment"
//               label="Comment"
//               variant="outlined"
//               autoComplete="on"
//             />

//           <Rating
//               style={{ marginBottom: '10px' }}
//               name="simple-controlled"
//               value={value}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//             />    

//             <Button
//               style={{ marginBottom: '10px' }}
//               type="submit"
//               variant="contained"
//             >
//               Add Comment
//             </Button>

//             <Button onClick={handleClose} type="reset" variant="outlined">
//               Cancel
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// export default AddComments;
