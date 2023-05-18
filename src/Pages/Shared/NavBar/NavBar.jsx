import { NavLink } from "react-router-dom";
import logo from '../../../assets/toyLogo.png'

const NavBar = () => {
    return (
        <div className="navbar px-16 bg-indigo-100 shadow top-0 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Home</a></li> </NavLink>
                        <NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>All Toys</a></li> </NavLink>
                        <NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>My Toys</a></li> </NavLink>
                        <NavLink to='/addatoy' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Add a Toy</a></li> </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}><li><a>Blogs</a></li></NavLink>
                        <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}><li><a>Register</a></li></NavLink>
                    </ul>
                </div>
                <NavLink to='/'><img src={logo} className="w-28 border text-bold rounded-lg"></img></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Home</a></li> </NavLink>
                    <NavLink to='/alltoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>All Toys</a></li> </NavLink>
                    <NavLink to='/mytoys' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>My Toys</a></li> </NavLink>
                    <NavLink to='/addatoy' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}> <li><a>Add a Toy</a></li> </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}><li><a>Blogs</a></li></NavLink>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-purple-700 font-semibold' : '')}><li><a>Register</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5">




                <NavLink className='btn  bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg'>Log out
                </NavLink>
                <NavLink to='/login' className='btn bg-purple-500 shadow-lg shadow-purple-500/100 hover:bg-purple-800 text-white font-semibold rounded-lg'>  Login
                </NavLink>



                <NavLink><img className='rounded-full w-14' alt="" /></NavLink>



            </div>
        </div>
    );
};

export default NavBar;