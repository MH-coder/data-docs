//AXIOS
import axios from "axios"
//API
import { API_INSTANCE } from "./ApiEndpoints"
console.log("aop:", API_INSTANCE);
export default function ApiRequest() {
    const request = axios.create({
        baseURL: API_INSTANCE,
        responseType: "json",
    })

    request.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.code === "ERR_NETWORK") {
                return
            }

            return Promise.reject(error.response)
        }
    )

    return request
}