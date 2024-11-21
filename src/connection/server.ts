import axios from "axios";
import { DEV_URL } from "./environment";

export const httpGet = async (url:string) => {
    try {
        const response = await axios.get(DEV_URL + url);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const httpPost = async (url:string, data:any) => {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

