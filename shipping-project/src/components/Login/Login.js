import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { loginService } from "../../services/service";
import Header from "../Header/Header";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [erroeMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/signup");
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const useHandleSubmit = async () => {
    setErrorMessage("");
    setIsError(false);
    setIsLoading(true);
    if (userName !== "" || password !== "") {
      if (userName !== "") {
        if (password !== "") {
          let res = await loginService({
            username: userName,
            password: password,
          });
          console.log(res, "res");
          if (res.data.loginStatus === "success") {
            setIsLoading(false);
            localStorage.setItem("username", userName);
            navigate("/dashboard");
          } else {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage("invalid credentials");
          }
        } else {
          setIsLoading(false);
          setIsError(true);
          setErrorMessage("enter valid password");
        }
      } else {
        setIsLoading(false);
        setIsError(true);
        setErrorMessage("enter valid username");
      }
    } else {
      setIsLoading(false);
      setIsError(true);
      setErrorMessage("enter required fields");
    }
  };
  return (
    <div>
      <Header isLogout={false} />
      <div className="flex justify-center items-center border h-screen">
        <div class="w-full max-w-md">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <h1 className="text-2xl text-center font-bold underline mb-5">
                Login
              </h1>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleChangeUserName}
                value={userName}
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
                onChange={handleChangePassword}
                value={password}
              />
              {isError && (
                <p class="text-red-500 text-xs italic">{erroeMessage}</p>
              )}
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center w-24"
                type="button"
                onClick={useHandleSubmit}
              >
                { isLoading?<ReactLoading
                    type="spin"
                    delay={1}
                    color="white"
                    height="25px"
                    width="25px"
                    className='mr-auto ml-auto'
                  />:'Login'}
                
              </button>
            </div>
            <div>
              <p class="flex items-center justify-center mt-3">
                <p className="text-center text-gray-500 text-xs mr-1">
                  Don't have an account ?{" "}
                </p>
                <a
                  className="text-sm cursor-pointer text-blue-700"
                  onClick={handleClickRegister}
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
