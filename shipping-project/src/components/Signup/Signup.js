import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { signupService } from "../../services/service";
import Header from "../Header/Header";
export default function Signup(){
    const [username,setUsername] = useState('')
    const[firstname,setFirstname] = useState('')
    const[lastname,setLastname]= useState('')
    const[phoneNumber,setPhoneNumber]= useState('')
    const[ gstInNumber,setGstInNumber]= useState('')
    const[email,setGmail]= useState('')
    const[password,setPassword]= useState('')
    const[confirmPassword,setConfirmPassword]= useState('')
    const [isErroeMessage, setIsErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate();
   
    const  handleChangeUsername=(event)=>{
        setUsername(event.target.value)
    }
    const  handleChangeFirstname=(event)=>{
        setFirstname(event.target.value)
    }
    const  handleChangeLastname=(event)=>{
        setLastname(event.target.value)
    }
    const  handleChangePhoneNumber=(event)=>{
        setPhoneNumber(event.target.value)
    }
    const  handleChangeGstInNumber=(event)=>{
        setGstInNumber(event.target.value)
    }
    const  handleChangeEmail=(event)=>{
        setGmail(event.target.value)
    }
    const  handleChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    const  handleChangeConfirmPassword=(event)=>{
        setConfirmPassword(event.target.value)
    }

    const handleClickSignup=async()=>{
        setIsError(false);
        setIsErrorMessage("");
        setIsLoading(true)

        if(username !== '' || firstname !== '' || lastname !== '' || phoneNumber !== '' || gstInNumber !== '' || email !==''|| password !== ''|| confirmPassword !==''){
            if(username!==''){
                if(firstname !==''){
                    if(lastname !==''){
                        if(phoneNumber !== '' && phoneNumber.length === 10){
                            if(gstInNumber !==''){
                                if(email !== ''){
                                    if(password !== ''){
                                        if(confirmPassword !== ''){
                                            if(password === confirmPassword){
                                                let data = {
                                                    username:username,firstname:firstname,lastname:lastname,mobileNumber:phoneNumber,gstRegNumber:gstInNumber,email:email,password:password
                                                }
                                                let res = await signupService(data)
                                                console.log(res)
                                                if(res.data?.registrationStatus === 'UserNameCreatedSucessfully' && res.data.gstVerificationStatus==='Success'){
                                                    navigate('/')

                                                }else {
                                                    setIsLoading(false)
                                                 setIsError(true);
                                                setIsErrorMessage(res?.data?.registrationStatus,res?.data.gstVerificationStatus);
                                
                                                }

                                            }
                                            else {
                                                setIsLoading(false)
                                                setIsError(true);
                                                setIsErrorMessage("Password and Confirm password not matteched");
                                            }

                                        }
                                        else {
                                            setIsLoading(false)
                                            setIsError(true);
                                            setIsErrorMessage("Enter confirm passowrd");
                                        }

                                    }
                                    else {
                                        setIsLoading(false)
                                        setIsError(true);
                                        setIsErrorMessage("Enter password");
                                    }

                                }
                                else {
                                    setIsLoading(false)
                                    setIsError(true);
                                    setIsErrorMessage("Enter email");
                                }

                            }
                            else {
                                setIsError(true);
                                setIsErrorMessage("Enter valid Gstin number");
                            }

                        }
                        else {
                            setIsError(true);
                            setIsErrorMessage("Enter valid phone number");
                        }

                    }else {
                setIsError(true);
                setIsErrorMessage("Enter lastname");
            }

                }else {
                setIsError(true);
                setIsErrorMessage("Enter firstname");
            }

            }
            else {
                setIsError(true);
                setIsErrorMessage("Enter username");
            }

        }
        else {
            setIsError(true);
            setIsErrorMessage("All fields are required");
        }

    }

   
    const handleClickRegister=()=>{
        navigate('/')
    }
    return (
        <div>
             <Header isLogout={false}/>
       
        <div className="flex justify-center items-center border h-screen">
            
        <div class="w-full max-w-xl">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl text-center font-bold underline mb-5">
                Signup
              </h1>
              <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="firstname"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="firstname"
              >
                Firstname
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Firstname"
                value={firstname}
                onChange={handleChangeFirstname}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Lastname
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={handleChangeLastname}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Phone Number
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
              />
            </div>
            
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                GSTIN no
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="GSTIN no"
                value={gstInNumber}
                onChange={handleChangeGstInNumber}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={password}
                onChange={handleChangePassword}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Confirm Password
              </label>
              <input
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={confirmPassword}
                onChange={handleChangeConfirmPassword}
              />
             { isError && <p class="text-red-500 text-xs italic">{isErroeMessage}</p>}
            </div>
            <div class="flex items-center justify-center w-full ">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-24"
                type="button"
                onClick={handleClickSignup}
              >
                { isLoading?<ReactLoading
                    type="spin"
                    delay={1}
                    color="white"
                    height="25px"
                    width="25px"
                    className='mr-auto ml-auto'
                  />:'Signup'}
              </button>
            </div>
            <div>
              <p class="flex items-center justify-center mt-3">
              <p className="text-center text-gray-500 text-xs mr-1">Alredy register? </p>
                  <a className="text-sm cursor-pointer text-blue-700" onClick={handleClickRegister}> Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      </div>
    )
}