let API_BASE_URL = 'https://65491754dd8ebcd4ab242bb9.mockapi.io';

//sliders get all
export async function getAllSliders(){
    let globalData; 
    await axios.get(API_BASE_URL+'/sliders')
    .then((result)=>{
        globalData = result.data;
    });

    return globalData;
}

//sliders get by ID
export async function getSlidersByID(id){
    let globalData;
    await axios.get(API_BASE_URL+`/sliders/${id}`)
    .then((result)=>{
        globalData = result.data;
    });
    
    return globalData;
}

//sliders delete
export async function deleteSliderByID(id){
    await axios.delete(API_BASE_URL+`/sliders/${id}`);
}

//sliders post
export async function postSlider(payload){
    let newSlider;
    newSlider =  await axios.post(API_BASE_URL+`/sliders`,payload);

    return newSlider;
}

//sliders put
export async function putSlidesByID(id,payload){
    axios.put(API_BASE_URL+`/sliders/${id}`,payload);
}

//sliders patch
export async function patchSliderByID(id,payload){
    axios.patch(API_BASE_URL+`/sliders/${id}`,payload);
}