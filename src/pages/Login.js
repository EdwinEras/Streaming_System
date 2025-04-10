
function Login() {
    return (
      <div className="h-screen mt-8 mx-4">
        <form 
        className="max-w-sm mx-auto p-8 border border-gray-700 rounded-lg shadow-sm bg-gray-800">
            <div className="mb-5">
                <label 
                className="block mb-2 font-medium text-gray-900 text-white">Your email</label>
                <input type="email" name="email" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="youremail@outlook.com" required />
            </div>
            <div className="mb-5">
                <label
                className="block mb-2 font-medium text-white">Your password</label>
                <input type="password" nake="password" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="********" required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="remember" name="remember" type="checkbox" value="" 
                className="border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <label 
                className="ms-2 font-medium text-gray-300">
                  Remember me
                </label>
            </div>
            <button type="submit" 
            className="text-white focus:outline-none font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
        </form>
      </div>
    );
  }
  
export default Login;