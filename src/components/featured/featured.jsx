import React from "react";
import { Link } from "react-router";

const Featured = ({ arrMedia, type }) => {
    return (
        <div className="border rounded-lg shadow-sm bg-gray-800 border-gray-700">
            <div className="relative">
                <p className="absolute top-0 left-2 mb-3 font-normal text-gray-100">Featured {type}</p>
                <Link to={`/${type}`}>
                    <p className="absolute rounded-lg p-1 bg-gray-700 top-0 right-2 mb-3 font-normal text-gray-100">See more {type}</p>
                </Link>
            </div>
            <div className="flex justify-center gap-4 p-4">
                {arrMedia.map((media) => (
                    <Link key={type + media.id} to={`/${type}/${media.id}`}>
                        <img
                            className="w-32 mt-8 sm:w-48 h-auto rounded-lg object-cover"
                            src={media.smallPoster}
                            alt={media.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Featured;