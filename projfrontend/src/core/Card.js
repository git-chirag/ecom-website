import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper/index";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
    const [redirect, setRedirect] = useState(false);
    const cardTitle = product ? product.name : "A title";
    const cardDescription = product ? product.description : "Description";
    const cardPrice = product ? product.price : "00";

    const addToCart = () => {
        if (isAuthenticated()) {
            addItemToCart(product, () => setRedirect(true));
            console.log("Added to Cart");
        } else {
            //TODO: Add a method for redirecting to signin page.
            console.log("Login Please");
        }
    };

    const getAredirect = (redirect) => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = () => {
        return (
            addtoCart && (
                <button
                    onClick={() => {
                        addToCart();
                    }}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                    style={{ width: "100%" }}
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveToCart = () => {
        return (
            removeFromCart && (
                <button
                    //TODO
                    onClick={() => {
                        removeItemFromCart(product.id);
                        console.log("Removed");
                    }}
                    className="btn btn-block btn-outline-danger mt-2 mb-2"
                    style={{ width: "100%" }}
                >
                    Remove from cart
                </button>
            )
        );
    };
    return (
        <div className="card text-dark bg-light border border-info">
            <div className="card-header lead">{cardTitle}</div>
            <div className="card-body">
                {getAredirect(redirect)}
                <div className=" p-2">
                    <ImageHelper product={product} />
                </div>
                <p className="lead bg-success font-weight-normal text-wrap px-2">
                    {cardDescription}
                </p>
                <p className="btn btn-success rounded  btn-sm px-4">
                    {"$" + cardPrice}
                </p>
                <div className="row">
                    <div className="col-12">{showAddToCart()}</div>

                    <div className="col-12">{showRemoveToCart()}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
