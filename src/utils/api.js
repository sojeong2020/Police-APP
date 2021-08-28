import axios from 'axios';

const policeApi = axios.create({
    baseURL: 'https://data.police.uk/api',
});

export const getCategories = () => {
    return policeApi
    .get('/forces')
    .then((response)=>{
        console.log(response)
        return response.data.forces;
    });
};