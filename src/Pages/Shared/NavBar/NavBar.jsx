import { NavLink } from "react-router-dom";
import logo from '../../../assets/toyLogo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
const {user, logOut}= useContext(AuthContext)

const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error => console.log(error))
}

    const navItems =
        <>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Home</a></li> </NavLink>
            <NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>All Toys</a></li> </NavLink>
            <NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>My Toys</a></li> </NavLink>
            <NavLink to='/addtoy' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Add a Toy</a></li> </NavLink>
            <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}><li><a>Blogs</a></li></NavLink>
        </>
    return (
        <div className="navbar px-16 shadow top-0 rounded ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to='/'><img src={logo} className="w-20 text-bold rounded-lg"></img></NavLink>

                <NavLink to='/'><p className="font-bold text-xl">ToyVerse</p></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-5">
               { user ?<NavLink>
                <button onClick={handleLogOut} className="btn btn-outline hover:bg-purple-600 ">Log Out</button>
               </NavLink> :
               <NavLink to={'/login'}>
                <button className="btn  bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold">Login</button>
               </NavLink>}
            </div>
        </div>
    );
};

export default NavBar;