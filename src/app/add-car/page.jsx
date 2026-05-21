"use client";

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from '@heroui/react';
import React from 'react';
import { useRouter } from 'next/navigation';


const AddCarPage = () => {

        const router = useRouter();
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const car = Object.fromEntries(formdata.entries());

        const res = await fetch('http://localhost:5000/add-car', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        })

        const data = await res.json();
        console.log(data);
        router.push('/explore-cars');
    }



    return (
        <div className='bg-blue-50 pb-10'>
            <h1 className="text-3xl font-bold text-center pt-10 text-blue-600">Add New Car</h1>




            <form
                onSubmit={onSubmit}
                className="p-10 space-y-8 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-md"
            >

                <TextField name="price" type="number" isRequired>
                    <Label>Price (BDT)</Label>
                    <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                    />
                    <FieldError />
                </TextField>




                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label>Car type</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Hatchback" textValue="Hatchback">
                                        Hatchback
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Sedan" textValue="Sedan">
                                        Sedan
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="SUV" textValue="SUV">
                                        SUV
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="MPV" textValue="MPV">
                                        MPV
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Electric" textValue="Electric">
                                        Electric
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="CarryBoy" textValue="CarryBoy">
                                        CarryBoy
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    <div className="">
                        <TextField name="pickupLocation" isRequired>
                            <Label>Pick up location</Label>
                            <Input placeholder="Add location" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <div className="">
                        <TextField name="carBrand" isRequired>
                            <Label>Car brand</Label>
                            <Input placeholder="Toyota" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    <TextField name="modelYear" type="number" isRequired>
                        <Label>Model year</Label>
                        <Input
                            type="number"
                            placeholder="2023"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    <div className="md:col-span-2">
                        <TextField name="carModel" isRequired>
                            <Label>Car model</Label>
                            <Input placeholder="Prius" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/toyota-prius.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Add description ..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    className=" rounded-lg w-full bg-blue-600 text-white"
                >
                    Add Car
                </Button>

                
            </form>
        </div>
    );
};

export default AddCarPage;