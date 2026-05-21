// "use client";
import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import CarCard from '../carcard';


const FeatureCars = async () => {

    const res = await fetch('http://localhost:5000/add-car');
    const cars = await res.json();
    console.log(cars);



    return (
        <div className='bg-blue-50'>
            <div className='max-w-7xl mx-auto bg-blue-50'>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 bg-blue-50">

                    
                    {cars.slice(0, 6).map(car => (<CarCard key={car._id} car={car} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureCars;