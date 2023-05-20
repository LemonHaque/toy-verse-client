import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const cars = useLoaderData()
    const { toyName, picture, sellerName,email,price,rating,quantity,details } = cars;
    console.log(cars);

    return (
        <div>
            <h2 className='text-purple-600 text-5xl font-bold my-10 text-center'>Details of the Toy</h2>
            

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name :{toyName}</h2>
                    <h2 className="card-title">Seller :{sellerName}</h2>
                    <p><strong>Email:</strong>{email}</p>
                    <p>Price: ${price}</p>
                    <p className="text-purple-600"><strong>Ratings:</strong>{rating}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p><strong>Details :</strong> {details}</p>
                    <div className="card-actions justify-end">
                    <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;