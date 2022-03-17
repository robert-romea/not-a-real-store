import React from "react";
import classes from "./Product.module.css";
import airforce from "../../images/airforce.png";
import airjordan from "../../images/airjordan.png";

const Product = (props) => {
  const { products, id } = props;
  console.log(products.products[id]);

  return (
    <>
      {products.products ? (
        <div className={classes["images-col-1-container"]}>
          <div className={classes["first-image-col-1"]}>
            <img
              src={
                products.products[id - 1]?.model === "Air Force 1"
                  ? airforce
                  : airjordan
              }
              alt="a"
            />
          </div>
          <div className={classes["shoes-price"]}>
            <div>
              <span className={classes["brand-style"]}>
                {products.products[id - 1]?.brand}{" "}
              </span>
              <span 
              className={classes["model-style"]}
              > {products.products[id - 1]?.model}</span>
            </div>
            <div>
              <span style={{ color: "#6E63F8" }}>
                {" "}
                ${products.products[id - 1]?.price}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div> Try something else </div>
      )}
    </>
  );
};

export default Product;
