import axios from 'axios';

let url = "http://localhost:3001/users";
const configs = {method: 'get', url: url};

let resp = await axios(configs);
console.log(resp.data)






