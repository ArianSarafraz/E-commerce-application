import axios from "axios";


const app = axios.create({
    baseURL: " https://fakestoreapi.com"
})

const http = {
    get: app.get,
    post: app.post,
    delete: app.delete,
    put: app.put,
    patch: app.patch
}

export const setUpInterceptor = (token) => {
    app.interceptors.request.use(
        (config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
}

export default http;