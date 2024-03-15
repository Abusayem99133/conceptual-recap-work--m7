import PropTypes from "prop-types";

const SingleProduct = ({ product, handleCard }) => {
  //   console.log(handleCart);
  //   const { category, description, id, image, price, title } = product;
  //   console.log(product);
  return (
    <div className="">
      <div className=" ">
        <img className=" mx-auto w-24" src={product.image} alt="" />
        <h3 className="text-2xl">{product.title.slice(0, 10)}</h3>
        <p>{product.description}</p>
        <div className="flex justify-around items-center">
          <h2 className="text-2xl">{product.price} $ </h2>
          <button
            onClick={() => handleCard(product)}
            className="bg-purple-600 p-2 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <hr className="" />
    </div>
  );
};
SingleProduct.propTypes = {};
export default SingleProduct;
