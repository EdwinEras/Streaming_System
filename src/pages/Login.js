import { useEffect, useState } from "react";
import { loginUser } from "../apiUsers";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  useEffect(()=>{
    const logUser = getFromLocalStorage("user")
    if(logUser){
      navigate("/dashboard");
    }
  }, [])

  async function processUser(){
    const formData ={
      email:email,
      password:password
    };
    try{
      const logUser = await loginUser(formData);
      console.log(logUser);
      if(logUser.email){
        saveToLocalStorage("user", logUser);
        // alert("User signed in")
        navigate("/dashboard");
      }
    }catch(err){
      console.log(err)
    }
  }

  const getFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) ? storedValue : null;
  };

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return (
    <div className="h-screen mt-8 mx-4">
      <form action={processUser}
      className="max-w-sm mx-auto p-8 border border-gray-700 rounded-lg shadow-sm bg-gray-800">
          <div className="mb-5">
              <label 
              className="block mb-2 font-medium text-gray-900 text-white">Your email</label>
              <input type="email" name="email" 
              value={email} onChange={(e)=>{setEmail(e.target.value)}}
              className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="youremail@outlook.com" required />
          </div>
          <div className="mb-5">
              <label
              className="block mb-2 font-medium text-white">Your password</label>
              <input type="password" name="password" 
              value={password} onChange={(e)=>{setPassword(e.target.value)}}
              className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" required />
          </div>
          <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
              <input id="remember" name="remember" type="checkbox" value="" 
              className="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <label 
              className="ms-2 font-medium text-gray-300">
                Remember me
              </label>
          </div>
          <button type="submit" 
          className="text-white focus:outline-none font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
            Submit
          </button>
      </form>
    </div>
  );
}
  
export default Login;