import { Button, Card, CloseButton } from "@heroui/react";
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import { map } from "better-auth";
import { DeleteBooking } from "../component/deletebooking";

const MyBookings = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user


    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const bookings = await res.json();

    console.log(bookings)


    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl text-blue-600 font-bold text-center my-10'>My Bookings</h1>

            <div className="grid grid-cols-1 py-10 md:grid-cols-3 lg:grid-cols-3 gap-5 space-y-5">

                {bookings.map(booking => <Card key={booking._id} className="w-full items-stretch md:flex-row">
                    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                        <img
                            alt="Cherries"
                            className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                            loading="lazy"
                            src={booking.imageUrl}
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <Card.Header className="gap-1">
                            <Card.Title className="pr-8">{booking.carBrand} {booking.carModel}</Card.Title>
                            <Card.Description>
                                <span className="font-bold">Pickup Location:{booking.pickupLocation}</span>
                            </Card.Description>
                            {/* <CloseButton aria-label="Close banner" className="absolute top-3 right-3" /> */}
                        </Card.Header>
                        <Card.Footer className="mt-auto grid gap-3">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">Price: </span>{booking.price}
                                <p>
                                    <span className="font-bold">Booking date: </span>
                                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })}
                                </p>
                            </div>
                            <DeleteBooking bookingId={booking._id}></DeleteBooking>
                        </Card.Footer>
                    </div>
                </Card>

                )}

            </div>
        </div>
    );
};

export default MyBookings;