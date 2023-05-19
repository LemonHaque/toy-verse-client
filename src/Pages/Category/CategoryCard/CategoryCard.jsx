
const CategoryCard = ({ category }) => {

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-60 h-48" src={category.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category.item}</h2>
                <p>Price: {category.price}</p>
                <p>Rating: {category.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg mr-6">View Details</button>
                </div>
            </div>
        </div>

    );
};

export default CategoryCard;