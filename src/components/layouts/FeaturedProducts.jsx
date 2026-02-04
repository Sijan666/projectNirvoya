import React from "react";
import Container from "../Container";
import Product from "../Product";
import women from "../../assets/women.png";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const FeaturedProducts = () => {
  return (
    <div>
      <Container>
        <Product
          productImg={women}
          badgeText={"-23% OFF"}
          productRating={
            <>
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStarHalf />
            </>
          }
          productTitle={"Women fashion dress set"}
          productPrice={"৳10500"}
        />
      </Container>
    </div>
  );
};

export default FeaturedProducts;
