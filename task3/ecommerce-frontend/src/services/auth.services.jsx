import axios from 'axios';

const urlbase = "http://localhost:4000/api/";

export const loginUser = async (user) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.post(`${urlbase}login`,user);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const registerUser = async (user) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.post(`${urlbase}register`, user);
        return response.data;
    }
    catch(error){
        throw error;
    }
}