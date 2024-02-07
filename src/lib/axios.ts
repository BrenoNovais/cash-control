import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bkp-mor.ddns.net:3737'
})