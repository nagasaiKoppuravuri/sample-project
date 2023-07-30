
import { useNavigate } from "react-router-dom";
import image from '../../assets/aurigraphLogo.jpg'
export default function Header(props){
    const navigate = useNavigate();
   const handleClickLogout=()=>{
    localStorage.clear()
    navigate('/')
   }

    return (
        <div className="font-bold text-2xl bg-[#49527d] h-14 flex justify-between">
       <div className='flex items-center'>
        <img src={image} alt="img" className='w-14 h-14 mr-3' />
        <span className='text-white'>Aurigraph</span>
       </div>
       { props.isLogout && <p className='text-white text-sm mt-auto mb-auto p-2 cursor-pointer' onClick={handleClickLogout}>Logout</p>}
      </div>
    )
}