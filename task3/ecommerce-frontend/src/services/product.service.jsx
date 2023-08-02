import axios from 'axios';

const urlbase = "http://localhost:4000/api/";

export const postProduct = async(product) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.post(`${urlbase}product`,product);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export const getProduct = async() => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`${urlbase}products`);
        return response.data;
    }
    catch(error){
        throw error;
}
}