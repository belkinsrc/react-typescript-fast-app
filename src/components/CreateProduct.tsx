import React, { useState } from "react";
import axios from "axios";
import {IProduct} from "../models";
import ErrorMessage from "./ErrorMessage";

const productData: IProduct = {
  id: 23,
  title: "new Product",
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 1,
    count: 1
  }
}

interface CreateProductProps {
  onCreated: (product: IProduct) => void
}

export default function CreateProduct({ onCreated }: CreateProductProps) {

  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const response =
      await axios.post<IProduct>("https://fakestoreapi.com/products", productData)
    onCreated(response.data);
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <form action="" onSubmit={submitHandler}>
      <input
        className="rounded py-2 px-4 border mb-2 w-full outline-0"
        type="text"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      { error && <ErrorMessage message={error} />}
      <button
        className="py-2 px-4 border rounded bg-yellow-400 hover:bg-amber-400">
        Create
      </button>
    </form>
  );
}