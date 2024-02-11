import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { addToCart, removeCart } from '../redux/cardSlice';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const cart = useSelector((store) => store.cart.cartArray);

    const dispatch = useDispatch();


    // const data = JSON.parse(window.localStorage.getItem('cart') || '[]');
    // { data && dispatch(addToCart(localStorage.getItem(cart))) }

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    return (
        <div className='mt-5'>
            <div className='d-flex flex-wrap gap-2'>
                {cart.length != 0 && <Link className="btn btn-primary bg-white text-success" to="/"
                    style={{
                        height: "40px",
                        marginLeft: "170px",
                        marginBottom: "40px",
                        position: "absolute",
                        translate: "790%",
                        zIndex: "50",
                        top: "0",
                        marginTop: "5px"
                    }}>Home</Link>}
                {cart && cart.map((item) => {
                    return <div className="card mt-3" style={{ width: "15rem" }}>
                        <img src={item.img}
                            className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">{item.name}</h5>
                            <h6 className="card-title fw-bold">qty:{item.qty}</h6>
                            <h6 className="card-title fw-bold">size:{item.size}</h6>

                            <div className="container w-100">


                                <div className='d-inline h-100 fs-5 fw-bold '>
                                    Price Rs{item.price}/-
                                </div>
                                <hr />

                                <button className="btn btn-primary justify-center ms-2"
                                    onClick={() => dispatch(removeCart(item))}>Remove Item</button>
                            </div>
                        </div>
                    </div>
                })}
                {cart.length === 0 &&
                    <Link className="btn btn-primary bg-white text-success" to="/"
                        style={{
                            marginTop: "300px",
                            marginLeft: "700px"
                        }}
                    >Home</Link>
                }
                {cart.length === 0 && <div className="card-title fw-bold"
                    style={{
                        fontSize: "50px",
                        marginTop: "200px",
                        position: "absolute",
                        marginLeft: "570px"
                    }} >No Cart Found</div>}
            </div>
        </div>
    )
}

export default MyCart
