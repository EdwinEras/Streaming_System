import React from "react";
import { Link } from "react-router";

const Featured = ({arrMedia, type}) => {
    return(
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="relative">
                <p className="absolute top-0 left-2 mb-3 font-normal text-gray-700 dark:text-gray-400">Featured {type}</p>
                <Link to={`/${type}`}>
                    <p className="absolute top-0 right-2 mb-3 font-normal text-gray-700 dark:text-gray-400">See more {type}</p>
                </Link>
            </div>
            <div className="flex align-center justify-center">
                {arrMedia.map((media) => (
                <Link key={type+media.id} to={`/${type}/${media.id}`}>
                    <img className="p-2 rounded-t-lg w-40 mt-8" src={media.img} alt={media.title} />
                </Link>
                ))}
            </div>
        </div>
    )
}

export default Featured;