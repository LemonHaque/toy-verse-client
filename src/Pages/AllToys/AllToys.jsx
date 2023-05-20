import { NavLink, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toys = useLoaderData();


    return (
        <div>
            <h2 className="text-purple-600 text-5xl font-bold my-10 text-center">All Toys</h2>
            <div>
                {
                    toys.map(toy => <div
                        key={toy._id}
                    >
                        <div className="card card-side w-2/3 mx-auto h-66 bg-purple-100 shadow border rounded mb-6">
                            <figure><img className="w-64" src={toy.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy.toyName}</h2>
                                <p>Seller: {toy.sellerName}</p>
                                <p>Sub Category: {toy.subCatgory}</p>
                                <p>Available Quantity: {toy.quantity}</p>
                                <div className="my-2">
                                <NavLink to='/toydetails' className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg'>View Details</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllToys;