import axios from 'axios';

const policeApi = axios.create({
    baseURL: 'https://data.police.uk/api',
});



export const getCategories = () => {
    return policeApi
    .get('/crime-categories')
    .then((response)=>{
        return response.data;
    });
};

export const getForces = () => {
    return policeApi
    .get('/forces')
    .then((response)=>{
        return response.data;
    });
};

export const getSearchesByForceDate = (force,date) => {

    let path=`/stops-force?force=${force}&date=${date}`
    
    return policeApi
    .get(path)
    .then((response)=>{
        //console.log(response.data)
        return response.data;
})
};   

export const getCrimesByForceDate = (force,date) => {

    let path =`/crimes-no-location?category=all-crime&force=${force}&date=${date}`
    return policeApi
    .get(path)
    .then((response)=>{
       // console.log(response.data)
        return response.data;
})
};   

/* ["All crime",
    "Anti-social behaviour",
    "Bicycle theft",
    "Burglary",
    "Criminal damage and arson",
    "Drugs",
    "Other theft",
    "Possession of weapons",
    "Public order",
    "Robbery",
    "Shoplifting",
    "Theft from the person",
    "Vehicle crime",
    "Violence and sexual offences",
    "Other crime"
    ]  */
