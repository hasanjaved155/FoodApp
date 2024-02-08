import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cardSlice';

const Card = (props) => {
    let foodItem = props.allFood
    //let dispatch = useDispatchCart();
    const dispatch = useDispatch();
    let data = useCart();

    const option = foodItem.options[0];
    const length = foodItem.size[0];

    let priceOption;

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const priceRef = useRef();
    let finalPrice;

    if (foodItem.options[0] === undefined) {
        priceOption = Object.keys(length);
        finalPrice = qty * parseInt(length[size]);
    }
    if (foodItem.size[0] === undefined) {
        priceOption = Object.keys(option)
        finalPrice = qty * parseInt(option[size]);
    }

    useEffect(() => {
        setSize(priceRef.current.value)
    })


    // const handleAddToCart = async () => {
    //     await dispatch({
    //         type: "ADD",
    //         id: foodItem._id,
    //         name: foodItem.name,
    //         price: finalPrice,
    //         img: foodItem.img,
    //         qty: qty,
    //         size: size
    //     })
    //     await console.log(data);
    // }

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: foodItem._id,
            name: foodItem.name,
            price: finalPrice,
            img: foodItem.img,
            qty: qty,
            size: size
        }));
    }

    return (
        <div>
            <div className="card mt-3" style={{ width: "20rem" }}>
                <img src={foodItem.img}
                    className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{foodItem.name}</h5>
                    {/* <p className="card-text"> {props.description}</p> */}
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOption.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5 fw-bold'>
                            Rs{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
