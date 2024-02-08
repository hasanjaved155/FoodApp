import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/login', { email, password });
            if (data.success) {
                //toast.success("User Register Successfully");
                localStorage.setItem("token", data.token);
                //console.log(localStorage.getItem("token"));
                navigate("/");

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
