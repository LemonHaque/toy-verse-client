import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {


    const toys = useLoaderData();
    const limit = 20;
    const visibleToys = toys.slice(0, limit);


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
                          visibleToys.map(car => <AllToysRow
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


export default AllToys;