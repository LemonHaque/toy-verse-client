import Swal from 'sweetalert2'
const AddaToy = () => {

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const picture = form.picture.value;
        const sellerEmail = form.selleremail.value;
        const sellerName = form.sellername.value;
        const subCategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;


        const newToy = { toyName, picture, sellerEmail, sellerName, subCategory, price, rating, quantity, details }
        console.log(newToy);

        // send the data to the server
        fetch('http://localhost:5000/toy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Adeed Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

    return (
        <div className="bg-purple-50 p-24">
            <h2 className="text-purple-600 text-5xl font-bold mb-10 text-center">Add A Toy</h2>

            <form onSubmit={handleAddToy}>
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
                            <input type="text" name="picture" placeholder="URL" className="input input-bordered w-full" />
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
                            <input type="text" name="selleremail" placeholder="Seller Email" className="input input-bordered w-full" />
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
                            <input type="text" name="subcategory" placeholder="Sub Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <span></span>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label className="input-group">
                        <span></span>
                            <input type="text" name="details" placeholder="URL" className="input input-bordered w-full" />
                        </label>
                    </div> */}
                </div>
                <div>
                    <button className="w-full my-10 py-2 bg-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/40 text-white font-semibold rounded-lg">Add Toy</button>
                </div>

            </form>
        </div>
    );
};

export default AddaToy;