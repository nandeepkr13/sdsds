import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import ProductList from "./Component/ProductList.js";

function App() {
  const ProductList = [
    {
      price: 20000,
      name: "IPhone 13",
      qunatity: 0,
    },
    {
      price: 20000,
      name: "Samsung M13",
      qunatity: 0,
    },
  ];
  return (
    <> 
      <Navbar />
      <ProductList  ProductList={product} />
      {/* <Footer/> */}
    </>
  );
}

export default App;
