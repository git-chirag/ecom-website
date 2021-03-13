import React, { useState, useEffect } from "react";
import Base from "./Base";
import { getProducts } from "./helper/coreapicalls";
import "../styles.css";
import Card from "./Card";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts(setError).then((data) => {
            if (!data) {
                setError(true);
            } else {
                setProducts(data);
            }
        });
    };

    // const loadAllProducts = () => {
    //   getProducts(setError)
    //     .then((data) => {
    //       setProducts(data);
    //     });
    // };

    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        <Base title="Home Page" description="Welcome to the Store">
            {error && <h1>Product Fetch Error</h1>}
            <div className="row">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-4 mb-4">
                            <Card product={product} />
                        </div>
                    );
                })}
            </div>
        </Base>
    );
};

export default Home;
