import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="Page-Inner-Content">
            <div className="Section-Tittle">
              <h3>Produtos Selecionados</h3>
              <div className="Underline"></div>
            </div>

            <div className="Main-Content">
              <ProductsList products={products} />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
