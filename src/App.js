import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import AddProduto from './components/crud/AddProduto';
import EditProduto from './components/crud/EditProduto';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
         <Router>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
        <a href="/github" className="navbar-brand">
          WebProduct
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/produtos"} className="nav-link">
              Product List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Product
            </Link>
          </li>
        </div>
      </div>
        </nav>
        <div className="container mt-3">
        <Routes>
            <Route exact path="/produtos" element={<ProductList/>}></Route>
            <Route path="/add" element={<AddProduto/>}></Route>
            <Route path="/editar/:id" element={<EditProduto/>}></Route>
          </Routes>
        
        </div>
        </Router>
    </div>
  );
}

export default App;
