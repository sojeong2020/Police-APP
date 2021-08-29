import axios from 'axios';

const policeApi = axios.create({
    baseURL: 'https://data.police.uk/api',
});

const postcodeApi = axios.create({
    baseURL: 'https://api.postcodes.io/postcodes',
});

export const getPostCode = () =>{
    return postcodeApi
    .get('/m332dt')
    .then((response)=>{
        console.log(response)
        console.log(response.data)
        console.log(response.data.result)
        console.log(response.data.result.postcode)
        console.log(response.data.result.longitude)

       
        return response.data.result;
    })
}


export const getCategories = () => {
    return policeApi
    .get('/crime-categories')
    .then((response)=>{
        console.log(response)
        return response.data;
    });
};

export const getOutcomes = () => {
    return policeApi
    .get('/https://data.police.uk/api/crimes-at-location?date=2019-02&location_id=884227')
    .then((response)=>{
        console.log(response)
        return response.data;
    });
};