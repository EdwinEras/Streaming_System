import React from "react";

const DetailsCard = ({ objMedia }) => {
    return (
        <div className="w-full flex item-center justify-center my-8" key={objMedia.id}>
            <div className="flex flex-col items-center w-5/6 border rounded-lg shadow-sm md:flex-row md:container border-gray-700 bg-gray-800">
                <img className="object-cover rounded-t-lg h-190 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src={objMedia.largePoster} alt={objMedia.name} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">
                        {objMedia.name} - {objMedia.type}
                    </h5>
                    <p className="mb-3 font-normal text-gray-400">
                        <strong>Synopsis:</strong> {objMedia.synopsis}
                    </p>
                    <div className="mb-3 font-normal text-gray-400">
                        <p className="mb-3 font-normal text-gray-400">
                            <strong>Product Price: </strong> ${objMedia.prodPrice}
                        </p>
                        <p className="mb-3 font-normal text-gray-400">
                            <strong>Rent Price: </strong> ${objMedia.rentPrice}
                        </p>
                        <p className="mb-3 font-normal text-gray-400">
                            <strong>Purchase Price: </strong> ${objMedia.purchPrice}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
