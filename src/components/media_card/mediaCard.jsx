import React from "react";
import { Link } from "react-router";

const MediaCard = ({id, title, year, img, type}) => {
    return(
        <div
        key={id} 
        className="w-full max-w-sm border rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <img className="p-2 rounded-t-lg h-60 md:h-3/4" src={img} alt={title} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">{year}</span>
                    <Link key={id} to={`/${type}/${id}`}>
                    <button 
                    
                    className="text-white rounded-lg px-3 py-2 m-2 text-center bg-blue-500 hover:bg-blue-700">
                        Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        
    )
}

export default MediaCard;