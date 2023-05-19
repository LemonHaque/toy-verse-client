import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const cars = useLoaderData()
    const {toyName,_id, picture}= cars;
    return (
        <div>
            <h2>Toy name :{toyName}</h2>
        </div>
    );
};

export default ToyDetails;