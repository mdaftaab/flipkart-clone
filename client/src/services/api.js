import axios from 'axios';
const URL = 'http://localhost:8000';


export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data).then((response) => {
            return response.data;
        })
        
    }
    catch (error) {
        console.log('Error while calling signup api ', error);
    }
}