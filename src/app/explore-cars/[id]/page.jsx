import CarDetailsClient from "./carclient";


const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://drive-fleet-backend.vercel.app/add-car/${id}`);
    const car = await res.json();

    return <CarDetailsClient car={car} />;
};

export default CarDetailsPage;