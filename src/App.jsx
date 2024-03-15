import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleCard = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    // console.log(isExist);
    if (!isExist) {
      setCart([...cart, p]);
    } else {
      alert("already in cart");
    }
  };
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  // console.log(cart);
  return (
    <>
      <h1 className="text-center text-3xl font-semibold">Conceptual Recap</h1>
      <div className="flex justify-around  ">
        <div className="  text-center  w-80 space-y-5  bg-slate-400">
          {products.map((pd, idx) => (
            <SingleProduct
              key={idx}
              product={pd}
              handleCard={handleCard}
            ></SingleProduct>
          ))}
        </div>
        <div className="cart-container ">
          <h1 className="text-center">This is cart</h1>
          <div className="flex justify-around mt-4">
            <h4>name</h4>
            <h4>price</h4>
          </div>
          <div className="mt-4">
            {cart.map((item, index) => (
              <div
                key={cart.name}
                className="flex justify-around items-center space-y-4"
              >
                <p>{index + 1}</p>
                <h4>{item.title.slice(0, 10)}</h4>
                <h4>{item.price}</h4>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-purple-400 rounded-md py-1 px-1"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
