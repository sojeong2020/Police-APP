import axios from 'axios';

const postcodeApi = axios.create({
    baseURL: 'https://postcodes.io',
});

export const getPostcode = () =>{
    return postcodeApi
    .get('/m332dt')
    .then((response)=>{
        console.log(response)
        return response.result.latitude;
    })
}


