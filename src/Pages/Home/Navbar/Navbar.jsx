import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

    const links = <>
       
       <li><NavLink to="/" className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Home</NavLink> </li>
       <li><NavLink to="/register" className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Register</NavLink> </li>
       {
        user && <>
        <li><NavLink to="/dashboard" className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Dashboard</NavLink> 
        </li>
        <li><NavLink to="/yourTeam" className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Your Team</NavLink> </li>
        <li><NavLink to="/Project" className="btn bg-blue-500 text-white rounded-md hover:text-black hover:bg-blue-300 text-lg font-semibold">Project</NavLink> </li>
        
        </>
       }
       
       
    </>

const handleSignOut = () =>{
  logOut()
  .then()
  .catch()
  

}

    return (
        <div className="navbar bg-white shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-bold text-blue-500">PRO-BROS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <Link to="/login"><button 
            onClick={handleSignOut}
             className="btn bg-blue-500
              text-white rounded-md
               hover:text-black
            hover:bg-blue-300 
             text-lg font-semibold">Sign Out</button></Link> :
             <Link to="/login"><button  className="btn bg-blue-500
             text-white rounded-md
              hover:text-black hover:bg-blue-300 
               text-lg font-semibold">Login</button></Link>

          }
        </div>
      </div>
    );
};

export default Navbar;