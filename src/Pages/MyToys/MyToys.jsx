import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
const {user} = useContext(AuthContext);
const [toys,setToys]= useState([]);

    useEffect(()=>{
        fetch(`https://toy-verse-server-delta.vercel.app/toy/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
           setToys(data)})

    },[user])
    return (
        <div>
             <div>
      <h2 className="text-purple-600 text-5xl font-bold my-10 text-center">
        My Toys
      </h2>
      <div className="overflow-x-auto w-full"> 
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Update Toy Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysRow key={toy._id} toy={toy}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </div>
    );
};

export default MyToys;