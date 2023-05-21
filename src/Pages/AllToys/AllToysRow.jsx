
const AllToysRow = ({ car }) => {

    const { sellerName, toyName, subCategory, price, quantity, picture } = car;


    

    return (
        <tr>
            <th>
                <li></li>
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