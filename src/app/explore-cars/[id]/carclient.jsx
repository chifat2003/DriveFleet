"use client";

import { useState } from 'react';
import { DeleteCar } from '@/app/component/deletemodal';
import { ModalForm } from '@/app/component/modalform';
import { Button, Card } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client"

const CarDetailsClient = ({ car }) => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    const { carBrand, carModel, modelYear, pickupLocation, imageUrl, price, category, description, _id } = car;
    const [bookingDate, setBookingDate] = useState(null);



    const handleBooking = async () => {

        if (!user) {
            alert("Please log in to book a car.");
            return;
        }

        

        const bookingData = {
            userId: user.id,
            userImage: user.image,
            userName: user.name,
            carId: _id,
            carBrand: carBrand,
            carModel: carModel,
            modelYear: modelYear,
            pickupLocation: pickupLocation,
            imageUrl: imageUrl,
            price: price,
            category: category,
            description: description,
            bookingDate: new Date(bookingDate)
        }
        
        const res = await fetch('https://drive-fleet-backend.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });

        const data = await res.json();

    }



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


                        <DateField onChange={setBookingDate} className="w-full" name="date">
                            <Label>Booking Date</Label>
                            <DateField.Group>
                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                            </DateField.Group>
                        </DateField>



                        <Button onClick={handleBooking} className="bg-[#0066cc] text-white font-medium px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors w-full item-end">
                            Book Now
                        </Button>
                        <div className='grid grid-cols-2 gap-2'>
                            <ModalForm car={car} />
                            {/* <Button className="bg-red-500 text-white font-medium px-6 py-2 rounded-xl hover:bg-red-600 transition-colors w-full item-end">
                                Delete
                            </Button> */}
                            <DeleteCar car={car} />
                        </div>


                    </div>
                </Card>


            </div>
        </div>

    );
};

export default CarDetailsClient;