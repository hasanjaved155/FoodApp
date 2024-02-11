import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/login',
                { email, password });
            if (data.success) {
                toast.success(data.message);
                localStorage.setItem("token", data.token);
                //console.log(localStorage.getItem("token"));
                navigate("/");
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error("Invalid Email Or Password")
        }
    }
    return (
        <Fragment>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>LOGIN FORM</h4>
                    <hr />
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/register" className="m-3 btn btn-danger">don't have account</Link>
                </form>
            </div>
        </Fragment>
    )
}

export default Login;
