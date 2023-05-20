
const AllToysRow = ({ car }) => {

    const { _id, sellerName, toyName, subCategory, price, quantity, picture } = car;


    const handleDelete = id => {
        const procced = confirm('Are you sure you want to delete this');
        if (procced) {
            fetch(``)
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                })
        }
    }

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-sm bg-purple-500 shadow shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-48 h-24">
                            {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {sellerName}
            </td>
            <td> {toyName}</td>
            <td>{subCategory}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <th>
                <button className="btn bg-purple-500 shadow shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold">View details</button>
            </th>
        </tr>
    );
};

export default AllToysRow;