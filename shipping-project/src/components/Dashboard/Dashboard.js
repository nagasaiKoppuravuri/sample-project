
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

export default function Dashboard() {
    const navigate = useNavigate();
    const handleClickButton=(event)=>{
        navigate(event.target.id);
    }
  return (
    <div>
      <Header isLogout = {true} />
      <div className="flex justify-between m-5 w-6/12 ml-auto mr-auto" >
       <div className="border p-5 rounded-lg bg-orange-400 text-white cursor-pointer" id="annexure/a" onClick={handleClickButton}>
       Annexure-A
       </div>
       <div className="border p-5 rounded-lg bg-orange-400 text-white cursor-pointer" id="annexure/b " onClick={handleClickButton}>
       Annexure-B
       </div>
       <div className="border p-5 rounded-lg bg-orange-400 text-white cursor-pointer" id="annexure/c" onClick={handleClickButton}>
       Annexure-C
       </div>
       <div className="border p-5 rounded-lg bg-orange-400 text-white cursor-pointer" id="annexure/d" onClick={handleClickButton}>
       Annexure-D
       </div>       
      </div>
    </div>
  );
}
