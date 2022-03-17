import React from "react";
import classes from "./Home.module.css";
import airforce from "../../images/airforce.png";
import airjordan from "../../images/airjordan.png";
import shoes from "../../images/shoes.png";
import { CaretRight } from "phosphor-react";

const Home = (props) => {
  const { products } = props;

  return (
    <div className={classes.container}>
      <div className={classes["row"]}>
        {/* first column */}
        <div className={classes["col-1"]}>
          <h1 className={classes["article-title"]}> Not a real store</h1>
          <p className={classes["para-height"]}>
            {" "}
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem{" "}
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. <br />
            <span> Nemo enim ipsam voluptatem, quia voluptas sit.</span>
          </p>
          <h4 className={classes["shop-title"]}>
            {" "}
            Shop Now{" "}
            <span>
              <CaretRight size={12} />{" "}
            </span>{" "}
          </h4>
          {/* row with two products */}
          {products ? (
            <div className={classes["products-row"]}>
              {/* first sneaker */}
              <div className={classes["images-col-1-container"]}>
                <div className={classes["second-image-col-1"]}>
                  <img src={airforce} alt="a" />
                </div>
                <div className={classes["shoes-price"]}>
                  <div>
                    <span className={classes["brand-style"]}>
                      {products[0].brand}{" "}
                    </span>
                    <span className={classes["model-style"]}>
                      {" "}
                      {products[0].model}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#6E63F8" }}>
                      ${products[0].price}
                    </span>
                  </div>
                </div>
              </div>
              {/* second sneaker */}
              <div className={classes["images-col-1-container"]}>
                <div className={classes["second-image-col-1"]}>
                  <img src={airjordan} alt="a" />
                </div>
                <div className={classes["shoes-price"]}>
                  <div>
                    <span className={classes["brand-style"]}>
                      {products[1].brand}{" "}
                    </span>
                    <span className={classes["model-style"]}>
                      {" "}
                      {products[1].model}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#6E63F8" }}>
                      ${products[1].price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div> No products today </div>
          )}
          <div className={classes["horisontal-bar-first"]}> </div>
        </div>

        <div className={classes["col-2"]}> 
        <div className={classes["vertical-bar-1"]}> </div>
        <div className={classes["vertical-bar-2"]}> </div>
        </div>

        {/* second column */}
        <div className={classes["col-3"]}>
          <div className={classes["first-image-col-3"]}>
            <div className={classes["black-div-1"]}> </div>
            <div className={classes["black-div-2"]}> </div>
            <div className={classes["black-div-3"]}> </div>
            <img src={airforce} alt="a" className={classes["rotate-image"]} />
          </div>
          <div className={classes["second-image-col-3"]}>
            <img src={shoes} alt="a" className={classes["shoes-image"]} />{" "}
            <div className={classes["see-editorial-btn"]}>
              {" "}
              <span>See our editorial </span>
              <span>
                <CaretRight size={12} />{" "}
              </span>{" "}
            </div>
            <div className={classes["horisontal-bar-second"]}> </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
