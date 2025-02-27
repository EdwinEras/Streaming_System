import React from "react";

const DetailsCard = ({ id, title, year, genre=[], cast=[], synopsis, img }) => {
    return (
        <div className="w-full flex item-center justify-center my-8" key={id}>
            <div className="flex flex-col items-center w-5/6 border rounded-lg shadow-sm md:flex-row md:container border-gray-700 bg-gray-800">
                <img className="object-cover rounded-t-lg h-190 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={img} alt={title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
                        {title} - {year}
                    </h5>
                    <p className="mb-3 font-normal text-gray-400">
                        <strong>Synopsis:</strong> {synopsis}
                    </p>
                    <div className="mb-3 font-normal text-gray-400">
                        <strong>Cast: </strong>
                        {cast.length > 0 ? cast.join(", ") : "Not available"}
                    </div>
                    <div className="mb-3 font-normal text-gray-400">
                        <strong>Genre: </strong>
                        {genre.length > 0 ? (
                            genre.map((g, i) => (
                                <span key={i} className="mr-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
                                    {g}
                                </span>
                            ))
                        ) : (
                            "Not available"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
