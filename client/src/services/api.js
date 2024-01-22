import axios from 'axios';
const URL = 'https://8000-monospace-flipkart-clone-1705812985097.cluster-22qpi2wzsjc4utjzyqn2yu6ar6.cloudworkstations.dev';


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