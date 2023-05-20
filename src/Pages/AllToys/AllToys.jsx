import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {


    const toys = useLoaderData();



    return (
        <div>
            <h2 className="text-purple-600 text-5xl font-bold my-10 text-center">All Toys</h2>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                        
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          toys.map(car => <AllToysRow
                          key={car._id}
                          car={car}
                          ></AllToysRow>)  
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

{/* <div className="card card-side w-2/3 mx-auto h-66 bg-purple-100 shadow border rounded mb-6 p-4">
                            <figure><img className="w-64" src={toy.picture} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{toy.toyName}</h2>
                                <p>Seller: {toy.sellerName}</p>
                                <p>Sub Category: {toy.subCatgory}</p>
                                <p>Available Quantity: {toy.quantity}</p>
                                <div className="my-2">
                               <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">View Details</button>
                                </div>
                            </div>
                        </div> */}

export default AllToys;