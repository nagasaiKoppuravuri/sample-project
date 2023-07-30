import { useEffect, useState } from "react";
import { formData } from "../../services/service";
import Header from "../Header/Header";

export default function AnnecaureA() {
  const [data,setData]=useState()
  useEffect(()=>{
    const getPrepopulatedData=async()=>{
      let username = localStorage.getItem('username')
      let data = await formData({username:username})
      setData(data)
    }
    getPrepopulatedData()
  },[])
  
  console.log(data)

  return (
    <div className="bg-gray-300 h-screen ">
     <Header isLogout = {true} />
      <div className=" bg-white rounded-lg w-2/4 border mt-10 ml-auto mr-auto h-5/6 overflow-auto p-5">
        
        <form>
            <h1 className="text-center font-bold text-2xl underline">Part 1</h1>
            <div class="mb-4 flex items-center mt-5">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 w-48"
                for="username"
              >
                Entername
              </label>
              <input
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={data?.data?.firstName}
              />
            </div>
            <div class="mb-4 flex items-center mt-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 w-48"
                for="username"
              >
                Pan number
              </label>
              <input
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={data?.data?.panNumber}
              />
            </div>
            <div class="mb-4 flex items-center mt-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 w-48"
                for="username"
              >
                GST
              </label>
              <input
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={data?.data?.gstRegId[0]}
              />
            </div>
          
            <div class="mb-4 flex items-center mt-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2 w-48"
                for="username"
              >
                IEC
              </label>
              <input
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={data?.data?.gstRegId[0]}
              />
            </div>
          <div className="flex mt-3">
          <label
                class="block text-gray-700 text-sm font-bold mb-2 w-48"
                for="username"
              >
               Constitution of business (Tick as applicable and attach copy):
              </label>

            <div className='w-4/5 flex-wrap flex items-center ml-5'>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
            <span className="txt-md mr-3 ">Proprietorship</span>
            </div>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
           
            <span className="txt-md mr-3 ">Partnership</span>
            </div>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
           
            <span className="txt-md mr-3 ">Limited Liability Partnership</span>
            </div>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
            
            <span className="txt-md mr-3 ">Registered Trust</span>
            </div>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
           
            <span className="txt-md ">Society/Cooperative society</span>
            </div>
            <div className="flex items-center m-3">
            <input
              type="checkbox"
              className="border w-5 h-5 border-solid border-gray rounded-md mr-1"
              placeholder="enter IEC "
            />
            <span className="txt-md ">Others (please specify)</span>
            <input
                class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={data?.data?.gstRegId[0]}
              />
            </div>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
