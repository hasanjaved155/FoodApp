import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/register', { name, email, password, location });
            if (data.success) {
                //toast.success("User Register Successfully");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Fragment>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputname">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputlocation">Location</label>
                        <input type="text" className="form-control" placeholder="Enter Your Location" value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </Fragment>
    )
}

export default Register
