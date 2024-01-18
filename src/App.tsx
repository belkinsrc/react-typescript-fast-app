import React, { useState } from "react";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";
import Modal from "./components/Modal";
import Product from "./components/Product";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import CreateProduct from "./components/CreateProduct";

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const createProductHandler = (product: IProduct) => {
    addProduct(product);
    setModal(false);
  }

  const hideModalHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains("modal-overlay")) {
      setModal(false)
    }
  }

  const showModalHandler = () => {
    setModal(true);
  }

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {error && <ErrorMessage message={error}/>}
        {products.map(product => <Product product={product} key={product.id}/>)}
        <button
          onClick={showModalHandler}
          className="fixed right-20 bottom-16 flex justify-center align-middle
                     rounded bg-emerald-500 min-h-2 py-1 px-4 hover:bg-lime-500">
          +
        </button>
      </div>
      {modal &&
        <Modal title="Create new product" onClose={hideModalHandler}>
          <CreateProduct onCreated={createProductHandler} />
        </Modal>
      }
    </>
  );
}

export default App;
