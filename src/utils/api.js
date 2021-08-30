import axios from 'axios';

const policeApi = axios.create({
    baseURL: 'https://data.police.uk/api',
});



export const getCategories = () => {
    return policeApi
    .get('/crime-categories')
    .then((response)=>{
        console.log(response.data)
        return response.data;
    });
};

export const getForces = () => {
    return policeApi
    .get('/forces')
    .then((response)=>{
        console.log(response.data)
        return response.data;
    });
};

/* export const getCrimes = () => {
    return policeApi
    .get('/crimes-no-location?category=all-crime&force=leicestershire&date=2019-07')
    .then((response)=>{
        console.log(response.data)
        console.log(response.data.length)
        console.log(response.data[0].month)
        return response.data;
})
};

export const getCrimesBy = (category,force,date) => {
    return policeApi
    .get(`/crimes-no-location?category=${category}&force=${force}&date=${date}`)
    .then((response)=>{
        console.log(response.data)
        console.log(response.data.length)
        return response.data;
})
}; */