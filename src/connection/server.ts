import axios from "axios";
import { DEV_URL, PROD_URL, FRONT_URL_DEV, FRONT_URL_PROD } from "./environment";

const baseUrl = PROD_URL;
export const NEWTAB = FRONT_URL_PROD;

export const httpGet = async ({path}:{path:string}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.get(url, {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')} username ${localStorage.getItem('username')}`,
                withCredentials: true
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}

export const httpPost = async ({path, data}:{path:string, data:any}) => {
    const url = `${baseUrl}${path}`;
    try {
        const response = await axios.post(url, data, {
            headers:{
                Authorization : `Bearer ${localStorage.getItem('token')} username ${localStorage.getItem('username')}`,
                withCredentials: true
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}