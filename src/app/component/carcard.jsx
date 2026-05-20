import React from 'react';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";


const CarCard = ({ car }) => {
    const { _id, carBrand, carModel, modelYear, pickupLocation, imageUrl } = car;

    return (
        <Card className="p-5 bg-white rounded-xl shadow-sm border border-gray-100 max-w-sm">
            {/* Image container with fixed aspect ratio to prevent distortion */}
            <div className="w-full h-48 overflow-hidden rounded-lg mb-5">
                <img
                    src={imageUrl}
                    alt={`${carBrand} ${carModel}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Car Details */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {carBrand} {carModel} {modelYear}
            </h3>
            <div className='flex gap-2'>
                <IoLocationSharp className='text-blue-600'/>
            <p className="text-sm text-gray-600 mb-5">
                
                Pickup Location: <span className="text-gray-800">{pickupLocation}</span>
            </p>
            </div>

            {/* Action Button */}
            <Link href={`/explore-cars/${_id}`}>
                <Button className="bg-[#0066cc] text-white font-medium px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors w-fit">
                    View Details
                </Button>
            </Link>
        </Card>
    );
};

export default CarCard;