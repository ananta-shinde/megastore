import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import { BrowserRouter,Routes,Route,useParams} from 'react-router-dom';
import Home from './components/home/home';
import ProductDetails from './components/common/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<ProductDetails/>}/>
        <Route path='/cart' element={<h1>cart details</h1>}/>
        <Route path='/profile' element={<h1>profile details</h1>}/>
        <Route path='/categories' element={<h1>Categories details</h1>}/>
        <Route path='/login' element={<h1>login details</h1>}/>
        <Route path='/signup' element={<h1>signup details</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
