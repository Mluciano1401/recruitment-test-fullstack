import axios from 'axios';

const urlbase = 'https://dog.ceo/api/breed';

export const getDogs = async () => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`${urlbase}s/list`);
        return response.data.message;
    }
    catch(error){
        throw error;
    }
}

export const getDogImg = async (breed) => {
     // eslint-disable-next-line no-useless-catch
     try{
        const response = await axios.get(`${urlbase}/${breed}/images/random`);
        return response.data.message;
    }
    catch(error){
        throw error;
    }
}

export const getSubBreeds = async (breed) => {
    // eslint-disable-next-line no-useless-catch
    try{
        const response = await axios.get(`${urlbase}/${breed}/list`);
        return response.data.message;
    }
    catch(error){
        throw error;
    }
}