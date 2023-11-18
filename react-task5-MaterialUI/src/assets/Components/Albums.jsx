import React, {useState} from 'react'
import { getAllAlbums } from '../api/albumsrequests.js'

const Albums = () => {
    const [albums, setAlbums] = useState([])
    

    useEffect(()=>{
        async function getAllAlbums(){
            const albums = await getAllAlbums()
            return albums
        }
        setAlbums(getAllAlbums())
    },[]);

  return (
    <>

    </>
  )
}

export default Albums