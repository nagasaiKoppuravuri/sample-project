import axios from "axios";

let baseURL = 'https://cbw.api.aurigraph.io/custom/form/user'

export const loginService=(data)=>{
    let response  = axios.post(`${baseURL}/login`,data)
    return response
}

export const signupService=(data)=>{
    let response  = axios.post(`${baseURL}/registration`,data)
    return response
}
export const formData=(username)=>{
    console.log(username)
    let response  = axios.post('https://aademomgmtnodes.aurigraph.io/smartcontract/userDetails',username)
    return response
}