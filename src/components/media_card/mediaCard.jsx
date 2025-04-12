import React from "react";
import { Link } from "react-router";

const MediaCard = ({id, name, rentPrice, largePoster, type}) => {
    return(
        <div
        key={id} 
        className="w-full max-w-sm border rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <img className="p-2 w-full object-cover rounded-t-lg h-60 md:h-3/4" src={largePoster} alt={name} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-white">{rentPrice}</span>
                    <Link key={id} to={`/${type}/${id}`}>
                    <button 
                    
                    className="text-white rounded-lg px-4 py-2 m-2 text-center bg-blue-500 hover:bg-blue-700">
                        Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default MediaCard;