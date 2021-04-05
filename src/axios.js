import axios from "axios"

const instance = axios.create({
    baseURL: "https://mern-tiktok-aloha.herokuapp.com/",
});

export default instance;