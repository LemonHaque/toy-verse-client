import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const cars = useLoaderData()
    const {toyName, picture, _id}= cars;
    
    return (
        <div>
           <h2>Toy name :{toyName}</h2>
        </div>
    );
};

export default ToyDetails;