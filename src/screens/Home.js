import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
//import Carousal from './../components/Carousal';
import axios from 'axios';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState('');
    //get blogs
    const getAllFoods = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/displayAllFoods");
            if (data?.success) {
                // data?.foods.map((food) => (
                //     console.log(food)
                // ))
                setFoods(data?.foods);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/displayAllCategory");
            if (data?.success) {
                // data?.foods.map((food) => (
                //     console.log(food)
                // ))
                setCategory(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllFoods();
        getAllCategory();
    }, []);

    console.log(category);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }}
                                />
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/?burger" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/?pastry" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/?pizza" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='container'>

                {
                    category.map((item) => {
                        return (<div className='row '>
                            <div key={item._id} className='fs-3 m-3'>
                                {item.CategoryName}
                            </div>
                            <hr />

                            {foods != []
                                ? foods.filter((foodItem) => (foodItem.CategoryName === item.CategoryName)
                                    && (foodItem.name.toLowerCase().includes(search.toLocaleLowerCase())))

                                    .map(food => {
                                        return (
                                            <div key={food._id} className='col-12 col-md-6 col-lg-3'>
                                                <Card
                                                    allFood={food}
                                                />
                                            </div>
                                        )
                                    }) : <div>No Such Data Found</div>
                            }
                        </div>)
                    })
                }



                {/* {category.map(item => {
                    return
                })} */}

                {/* {foods.map((food) => (
                    <Card
                        name={food?.name}
                        image={food?.img}
                        option={food?.options[0]}
                        size={food?.size[0]}
                    />
                ))} */}

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
