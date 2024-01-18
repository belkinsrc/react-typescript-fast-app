import React, {useState} from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-lime-500";

  const btnClasses = ["px-4 py-2", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button className={btnClasses.join(" ")}
              onClick={() => setDetails(prevState => !prevState)}>
        { details ? "Hide Details" : "Show Details" }
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}

export default Product;