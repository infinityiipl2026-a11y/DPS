import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../UI/Button/Button";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-card-brand">{product.brand}</span>
      </div>
      <div className="product-card-content">
        {product.model ? <span className="product-card-model">Model: {product.model}</span> : null}
        <h4>{product.name}</h4>
        <p>{product.shortDescription}</p>
        <ul>
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Button onClick={() => navigate(`/product/${product.id}`)} variant="ghost" className="product-card-btn">
          View Details <FaArrowRight />
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
