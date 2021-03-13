import React from "react";
import { Card, CardImg } from "reactstrap";

function ImageHelper({ product }) {
    const imageurl = product ? product.image : "t.ly/DaI7";
    return <CardImg top width="100%" src={imageurl} alt="Card image cap" />;
}

export default ImageHelper;
