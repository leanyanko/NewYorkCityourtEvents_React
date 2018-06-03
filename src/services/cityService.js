import axios from 'axios';

const services = {}; //= axios.create();

const AUTH_TOKEN = 'Tb6LBwjMBVogm2JNZA5LPpYjk';
//const AUTH_TOKEN = 'i8xVr2JzZFq1Yn7bV22MW6f6Nl4BoIsdxiWY';

const serverUrl = 'https://localhost:8080/requests';

services.getList = () => {
    console.log("TRY");
    return axios.get('/requests');
}

const baseURL = 'https://data.cityofnewyork.us/resource/buex-bi6w.json';
services.getData = (category) => {
    const url = `${baseURL}?category_description=${category}`
    return axios.get(url);
}

services.postTo = (data) => {
    return axios({
        method: 'POST',
        url: data.path,
        data: {
            content: data.content
        }
    })
}
export default services;