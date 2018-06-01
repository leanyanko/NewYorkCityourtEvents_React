import axios from 'axios';

const services = {}; //= axios.create();

const AUTH_TOKEN = 'Tb6LBwjMBVogm2JNZA5LPpYjk';
//const AUTH_TOKEN = 'i8xVr2JzZFq1Yn7bV22MW6f6Nl4BoIsdxiWY';

// axios.defaults.baseURL = 'https://data.cityofnewyork.us/resource/buex-bi6w.json';
// axios.defaults.headers.common['X-Auth-Token'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

services.getData = () => {
 return axios.get('https://data.cityofnewyork.us/resource/buex-bi6w.json');
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