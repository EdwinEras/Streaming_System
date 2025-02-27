
function Register() {
    return (
        <div className="h-screen mt-8 mx-4 ">
            <form 
            className="max-w-sm mx-auto p-8 border border-gray-700 rounded-lg shadow-sm bg-gray-800">
            <div className="mb-5">
                <label
                className="block mb-2 text-gray-900 text-white">Email address</label>
                <input type="email" name="floating_email" id="floating_email" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder="youremail@outlook.com" required />
                
            </div>
            <div className="mb-5">
                <label
                className="block mb-2 text-gray-900 text-white">Password</label>
                <input type="password" name="floating_password" id="floating_password" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder="*******" required />
            </div>
            <div className="mb-5">
                <label
                className="block mb-2 text-gray-900 text-white">Confirm Password</label>
                <input type="password" name="floating_password" id="floating_password" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder="*******" required />
            </div>
            <div className="mb-5">
                <label 
                className="block mb-2 text-gray-900 text-white">First name</label>
                <input type="text" name="floating_first_name" id="floating_first_name" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                placeholder="First name" required />
            </div>
            <div className="mb-5">
                <label 
                className="block mb-2 text-gray-900 text-white">Last name</label>
                <input type="text" name="floating_last_name" id="floating_last_name" 
                className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Last name" required />
            </div>
            <div className="mb-5">
                <div className="mb-5">
                <label 
                    className="block mb-2 text-gray-900 text-white">Phone number (123-456-7890)</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" 
                    className="border rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="123-456-7890" required />
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Register;