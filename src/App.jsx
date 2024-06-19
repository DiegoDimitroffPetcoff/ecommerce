"/vite.svg";
import { useState } from "react";
import "./App.css";
import { ProductList } from "./components/productList";
import { useProducts } from "./hooks/useProducts";
import { useFilter } from "./hooks/useFilter";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cartContext";

function App() {
  const [search, setSearch] = useState("");
  const { productList, getProduct } = useProducts(search);

  function handleSubmite(e) {
    e.preventDefault();
    getProduct(search);
  }
  function handleOnchange(e) {
    const newSearch = e.target.value;
    setSearch(newSearch);
  }

  const ProductFiltered = useFilter(productList, search);
  return (
    <CartProvider>
      <header>
        <h1>Mercado De pulgas</h1>
        <section>
          <h2>Buscador:</h2>
          <form>
            <input value={search} onChange={handleOnchange} />
            <button onClick={handleSubmite}>Buscar</button>
          </form>
        </section>
        <section className="CartContent">
          <Cart />
        </section>
      </header>
      <main>
        Productos:
        <ProductList productsList={ProductFiltered} />
      </main>
    </CartProvider>
  );
}

export default App;
