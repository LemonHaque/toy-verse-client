import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const toys = useLoaderData();
  const limit = 20;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
  const [searched, setSearched] = useState(false);
  const visibleToys = searched ? filteredToys.slice(0, limit) : toys.slice(0, limit);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredToys = toys.filter(
      (car) =>
        car.toyName?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false
    );
    setFilteredToys(filteredToys);
    setSearched(true);
  };

  return (
    <div>
      <h2 className="text-purple-600 text-5xl font-bold my-10 text-center">
        All Toys
      </h2>
      <div className="overflow-x-auto w-full">
        <form className="mb-4 text-center" onSubmit={handleSearchSubmit}>
          <h2 className="mb-2 text-xl font-semibold">
            Search Here for your desired toy
          </h2>
          <input
            type="text"
            placeholder="Search by toy name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
          >
            Search
          </button>
        </form>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
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
            {visibleToys.map((car) => (
              <AllToysRow key={car._id} car={car} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
