"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { BiEdit } from "react-icons/bi";


export function ModalForm({ car }) {

    
    
    const onSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const car = Object.fromEntries(formdata.entries());

        const res = await fetch(`https://drive-fleet-backend.vercel.app/add-car/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(car),
        })

        const data = await res.json();
        console.log(data);
        console.log(car);
    }
        const { _id, carBrand, carModel, modelYear, pickupLocation, imageUrl, price, category, description } = car;



    return (
        <Modal>
            <Button className="bg-[#0066cc] text-white font-medium px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors w-full item-end">
                Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Car Details</Modal.Heading>
                            
                            
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Edit your car details and save them to the database. You can also delete the car if you no longer want to list it for rent.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md"
                                >

                                    <TextField name="price" type="number" defaultValue={price} isRequired>
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
                                                defaultValue={category}
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
                                            <TextField name="pickupLocation" isRequired defaultValue={pickupLocation}>
                                                <Label>Pick up location</Label>
                                                <Input placeholder="Add location" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="">
                                            <TextField name="carBrand" isRequired defaultValue={carBrand}>
                                                <Label>Car brand</Label>
                                                <Input placeholder="Toyota" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <TextField name="modelYear" type="number" isRequired defaultValue={modelYear}>
                                            <Label>Model year</Label>
                                            <Input
                                                type="number"
                                                placeholder="2023"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <div className="md:col-span-2">
                                            <TextField name="carModel" isRequired defaultValue={carModel}>
                                                <Label>Car model</Label>
                                                <Input placeholder="Prius" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Image URL - Removed preview */}
                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
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
                                            <TextField name="description" isRequired defaultValue={description}>
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
                                        slot="close"
                                        className=" rounded-lg w-full bg-blue-600 text-white"
                                    >
                                        Update
                                    </Button>


                                </form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}