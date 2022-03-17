import React, { useEffect, useState } from "react";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";
import classes from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);

  return (
    <>
      <div className={classes.row}>
        <div className={classes["col-1"]}>
          <button className={`${classes["btn-1"]} ${classes["margin-right"]}`}>
            {" "}
            Shop women{" "}
          </button>
          <button className={classes["btn-2"]}> Shop men </button>
        </div>
        <div className={classes["col-2"]}>
          <button className={classes["btn-3"]}> Filters </button>
        </div>
      </div>

      <div className={classes["products"]}>
        <div className={classes["aligned-products"]}>
          {products?.products?.map((product) => (
            <Product key={uuidv4()} products={products} id={product.id} />
          ))}
        </div>

        <div className={classes["flex-bare"]}>
          <div className={classes["horisontal-bare-first"]}> </div>
          <div className={classes["horisontal-bare-second"]}> </div>
        </div>
      </div>
    </>
  );
};

export default Products;
