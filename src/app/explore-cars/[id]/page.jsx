import { Button, Card } from '@heroui/react';
import React from 'react';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/add-car/${id}`);
    const car = await res.json();
    const { carBrand, carModel, modelYear, pickupLocation, imageUrl, price, category, description } = car;

    console.log(id);
    // console.log(car);

    return (

        <div className='bg-blue-50'>
            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-10 p-10 max-w-7xl mx-auto'>

                <div className='lg:col-span-3'>
                    <img className='rounded-lg w-full' src={imageUrl} alt={`${carBrand} ${carModel}`} />
                </div>
                <Card className='p-5 bg-white rounded-lg shadow-sm border border-gray-100 lg:col-span-2'>
                <div className='lg:col-span-2 space-y-6'>
                    <h1 className='text-4xl font-semibold'>{carBrand} {carModel}</h1>
                    <div>
                        <p><span className='font-semibold'>Category:</span> {category}</p>
                        <p><span className='font-semibold'>Model Year:</span> {modelYear}</p>
                        <p><span className='font-semibold'>Pickup Location:</span> {pickupLocation}</p>
                        <p><span className='font-semibold'>Price Per Day:</span> {price} TK</p>
                    </div>
                    <div className=''>
                        <p className='text-2xl font-bold'>Description:</p>
                        <p className=''> {description}</p>
                    </div>
                    <Button className="bg-[#0066cc] text-white font-medium px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors w-full item-end">
                        Book Now
                    </Button>

                </div>
                </Card>


            </div>
        </div>
    );
};

export default CarDetailsPage;