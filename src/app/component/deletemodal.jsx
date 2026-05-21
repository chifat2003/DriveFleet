"use client";

import { AlertDialog, Button } from "@heroui/react";
// import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation';

export function DeleteCar({ car }) {


    const { _id } = car;
    const router = useRouter();
    
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/add-car/${car._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        console.log(data);
        router.push('/explore-cars');
    }


    return (
        <AlertDialog>
            <Button className="bg-red-500 text-white font-medium px-6 py-2 rounded-xl hover:bg-red-600 transition-colors w-full item-end">Delete Project</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Want to delete car data permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>your added car</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}