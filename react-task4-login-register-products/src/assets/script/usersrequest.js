import API_BASE_URL from "./base-url";
import axios from 'axios';

//users get all
export async function getAllUsers(){
    let globalData; //undefined
    await axios.get(API_BASE_URL+'/users')
    .then((result)=>{
        globalData = result.data;
    });

    return globalData;
}

//users get by ID
export async function getUsersByID(id){
    let globalData; //undefined
    await axios.get(API_BASE_URL+`/users/${id}`)
    .then((result)=>{
        globalData = result.data;
    });
    
    return globalData;
}

//users delete
export async function deleteUsersByID(id){
    await axios.delete(API_BASE_URL+`/users/${id}`);
}

//users post
export async function postUser(payload){
    let newCategory;
    newCategory =  await axios.post(API_BASE_URL+`/users`,payload);

    return newCategory;
}

//users put
export async function putUserByID(id,payload){
    axios.put(API_BASE_URL+`/users/${id}`,payload);
}

//users patch
export async function patchUserByID(id,payload){
    axios.patch(API_BASE_URL+`/users/${id}`,payload);
}