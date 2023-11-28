import API_BASE_URL from "./base_url";
import axios from 'axios';

//products get all
export async function getAllProducts(){
    let globalData; //undefined
    await axios.get(API_BASE_URL+'/products')
    .then((result)=>{
        globalData = result.data;
    });

    return globalData;
}

//products get by ID
export async function getProductsByID(id){
    let globalData; //undefined
    await axios.get(API_BASE_URL+`/products/${id}`)
    .then((result)=>{
        globalData = result.data;
    });
    
    return globalData;
}

//products delete
export async function deleteProductsByID(id){
    await axios.delete(API_BASE_URL+`/products/${id}`);
}

//products post
export async function postProduct(payload){
    let newCategory;
    newCategory =  await axios.post(API_BASE_URL+`/products`,payload);

    return newCategory;
}

//products put
export async function putProductByID(id,payload){
    axios.put(API_BASE_URL+`/products/${id}`,payload);
}

//products patch
export async function patchProductByID(id,payload){
    axios.patch(API_BASE_URL+`/products/${id}`,payload);
}