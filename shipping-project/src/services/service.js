import axios from "axios";

let baseURL = 'https://cbw.api.aurigraph.io/custom/form'

export const loginService=(data)=>{
    let response  = axios.post(`${baseURL}/user/login`,data)
    return response
}

export const signupService=(data)=>{
    let response  = axios.post(`${baseURL}/user/registration`,data)
    return response
}
export const formData=(username)=>{
    let response  = axios.post('https://cbw.api.aurigraph.io/custom/form/userDetails',username)
    return response
}