import axios from 'axios';

const urlbase = "http://localhost:4000/api/";

const setToken = (token) => {
    const config = {
        headers:{
            'Authorization': "Bearer " + token
        }
    };
    return config;
}

export const postProduct = async(product, token) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.post(`${urlbase}product`,product, setToken(token));
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const getProduct = async(token) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`${urlbase}products`, setToken(token));
        return response.data;
    }
    catch(error){
        throw error;
}
}