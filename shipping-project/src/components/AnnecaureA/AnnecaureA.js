export default function AnnecaureA() {
  return (
    <div className="bg-gray-300 h-screen ">
      <div className="text-center font-bold text-2xl bg-stone-400 h-14 flex items-center justify-center">
        <h1>Form Annecaure-A</h1>
      </div>
      <div className=" bg-white rounded-lg w-2/4 border mt-10 ml-auto mr-auto h-5/6 overflow-auto p-5">
        
        <form>
            <h1 className="text-center font-bold text-2xl underline">Part 1</h1>
          <div className="flex items-center mt-10">
            <p className="mr-5 text-amber-500 w-56">Enter Name:</p>
            <input
              type="text"
              className="border w-2/5 h-8 border-solid border-gray rounded-md"
              placeholder="enter name "
            />
          </div>
          <div className="flex items-center mt-3">
            <p className="mr-5 text-amber-500 w-56">PAN No:</p>
            <input
              type="text"
              className="border w-2/5 h-8 border-solid border-gray rounded-md"
              placeholder="enter pan number "
            />
          </div>
          <div className="flex items-center mt-3">
            <p className="mr-5 text-amber-500 w-56">GSTIN:</p>
            <input
              type="text"
              className="border w-2/5 h-8 border-solid border-gray rounded-md"
              placeholder="enter GSTIN "
            />
          </div>
          <div className="flex items-center mt-3">
            <p className="mr-5 text-amber-500 w-56">IEC:</p>
            <input
              type="text"
              className="border w-2/5 h-8 border-solid border-gray rounded-md"
              placeholder="enter IEC "
            />
          </div>
          <div className="flex items-center mt-3">
            <p className="mr-5 text-amber-500 w-56">Constitution of business (Tick as applicable and attach copy):</p>
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
            <input type='text' className="border rounded-md" placeholder="others"/>
            </div>
          </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
