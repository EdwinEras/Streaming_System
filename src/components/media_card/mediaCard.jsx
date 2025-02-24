import React from "react";
import { Link } from "react-router";

const MediaCard = ({id, title, year, img, type}) => {
    return(
        <div
        key={id} 
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Link key={id} to={`/${type}/${id}`}>
            <img className="p-2 rounded-t-lg" src={img} alt={title} />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{year}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details
                    </button>
                </div>
            </div>
        </Link>
        </div>
        
    )
}

export default MediaCard;