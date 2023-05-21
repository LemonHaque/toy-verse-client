import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {

    const UpdateToys = () => {
        const toy = useLoaderData(); 
    //     const { _id, sellerName, toyName, subCategory, price, quantity, picture } = toy;
    //     console.log(toy);
     }
    return (
        <div className="bg-purple-50 p-24">
        <h2 className="text-purple-600 text-5xl font-bold mb-10 text-center">Update A Toy:</h2>

        <form >
            {/* form rows */}
            <div className="md:flex gap-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Picture URL</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="picture" placeholder="https://i.ibb.co/ZMnr7ft/car1.jpg" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="sellername" placeholder="Seller Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="selleremail" placeholder="example@email.com" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="subcategory" placeholder="Sports Car/Normal Car/SUV" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="price" placeholder="$ Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="rating" placeholder="1-5 Stars" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex gap-8">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Details  Description</span>
                    </label>
                    <label className="input-group">
                        <span></span>
                        <input type="text" name="details" placeholder="Details about the toy" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Category</span>
                    </label>
                    <label className="input-group">
                    <span></span>
                        <input type="text" name="category" placeholder="Sports/Normal/SUV" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div>
                <button className="w-full my-10 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg">Update Toy</button>
            </div>

        </form>
    </div>
    );
};

export default UpdateToys;