import axios from 'axios';

export const generalGet = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};