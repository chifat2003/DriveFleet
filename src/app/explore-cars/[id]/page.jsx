import CarDetailsClient from "./carclient";


const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/add-car/${id}`);
    const car = await res.json();

    return <CarDetailsClient car={car} />;
};

export default CarDetailsPage;