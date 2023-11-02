let API_BASE_URL = ' http://localhost:3000';

//coffee get all
export async function getAllCoffees (){
    let globalData;
    await axios.get(API_BASE_URL+'/coffees')
    .then((result) => {
        globalData = result.data;
    })
    return globalData
}

//coffee get by ID
export async function getCoffeeByID (id){
    let globalData;
    await axios.get(API_BASE_URL+`/coffees/${id}`)
    .then((result) => {
        console.log(result);
        globalData = result.data;
    })
    return globalData
}