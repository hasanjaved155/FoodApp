import React from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import { useSelector } from 'react-redux';


const Navbar = () => {
    const cart = useSelector((store) => store.cart.cartArray);
    const navigate = useNavigate();
    const handleSubmit = () => {
        localStorage.removeItem("token");
        toast.success("User logout Successfully");
        navigate('/login');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">Food</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("token")) ?
                                < li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <div className='d-flex '>
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/register">Register</Link>
                            </div>
                            :
                            <div>
                                <Link className="btn bg-white text-success mx-2" to="/cart">My Cart {" "}
                                    <Badge pill bg='danger' >{cart.length}</Badge>
                                </Link>
                                <div className="btn bg-white text-danger mx-1" onClick={handleSubmit}>Logout</div>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
