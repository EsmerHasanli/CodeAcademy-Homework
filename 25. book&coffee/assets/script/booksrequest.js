let API_BASE_URL = ' http://localhost:3000';

//books get all
export async function getAllBooks (){
    let globalData;
    await axios.get(API_BASE_URL+'/books')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//books get by ID
export async function getBookByID (id){
    let globalData;
    await axios.get(API_BASE_URL+`/books/${id}`)
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

