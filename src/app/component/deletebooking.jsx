"use client";

import { AlertDialog, Button } from "@heroui/react";
// import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation';

export function DeleteBooking({ bookingId }) {


    // const { _id } = car;
    // const router = useRouter();

    const handleDelete = async () => {
        const res = await fetch(`https://drive-fleet-backend.vercel.app/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        window.location.reload()

        const data = await res.json();
        
    }


    return (
        <AlertDialog>
            <Button className="w-full bg-red-500 sm:w-auto">Cancel Booking</Button>            
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Want to delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>your booking</strong> and all of its
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