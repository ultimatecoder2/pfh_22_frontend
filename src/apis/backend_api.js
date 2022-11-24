import axios from 'axios';
const devURL = "http://localhost:8000"
const record =  axios.create({
    baseURL:devURL
})
const authRecord =(token) => axios.create({
    baseURL: devURL,
    headers: {'Authorization': 'Bearer '+ token}
  });
export {authRecord, record}