import API_BASE_URL from "./base-url";
import axios from 'axios';

//albums get all
export async function getAllAlbums(){
    let globalData; //undefined
    await axios.get(API_BASE_URL+'/albums')
    .then((result)=>{
        globalData = result.data;
    });

    return globalData;
}

//albums get by ID
export async function getAlbumsByID(id){
    let globalData; //undefined
    await axios.get(API_BASE_URL+`/albums/${id}`)
    .then((result)=>{
        globalData = result.data;
    });
    
    return globalData;
}

//albums delete
export async function deleteAlbumsByID(id){
    await axios.delete(API_BASE_URL+`/albums/${id}`);
}

//albums post
export async function postAlbum(payload){
    let newCategory;
    newCategory =  await axios.post(API_BASE_URL+`/albums`,payload);

    return newCategory;
}

//albums put
export async function putAlbumByID(index,payload){
   await axios.put(API_BASE_URL+`/albums/${index}`,payload);
}

//albums patch
export async function patchAlbumByID(index,payload){
    await axios.patch(API_BASE_URL+`/albums/${index}`,payload);
}