import axios from 'axios';

const policeApi = axios.create({
    baseURL: 'https://data.police.uk/api',
});



export const getCategories = () => {
    return policeApi
    .get('/crime-categories')
    .then((response)=>{
        console.log(response)
        return response.data;
    });
};