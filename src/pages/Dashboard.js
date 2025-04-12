import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Dashboard(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const getFromLocalStorage = (key) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    };

    useEffect(() => {
        const logUser = getFromLocalStorage("user");
        if (logUser) {
            setUser(logUser);
        } else {
            navigate("/");
        }
    }, []);

    if (!user) {
        return null;
    }

    return (
        <div className="h-screen mt-8 mx-4">
            <section className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-red-700 mt-28 uppercase">
                    Welcome back, {user.firstName} {user.lastName}!
                </h1>

                <div className="bg-white/10 backdrop-blur-md p-8 border border-gray-300 bg-gray-300 shadow-lg rounded-xl">
                    <h2 className="text-2xl font-semibold mb-6 border-b border-white pb-2">
                        Account Details
                    </h2>
                    <div className="space-y-2 text-lg">
                        <p><span className="text-red-700">First Name:</span> {user.firstName}</p>
                        <p><span className="text-red-700">Last Name:</span> {user.lastName}</p>
                        <p><span className="text-red-700">Email:</span> {user.email}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
