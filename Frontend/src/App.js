
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Cliente from './routes/Cliente';
import OrdemServico from './routes/OrdemServico';
import Produto from './routes/Produto';
import Tecnicos from './routes/Tecnicos';
import TiposServico from './routes/TiposServico';
import Login from './routes/Login';


export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cliente" element={<Cliente/>}/>
        <Route path="/ordemservico" element={<OrdemServico/>}/>
        <Route path="/produto" element={<Produto/>}/>
        <Route path="/tecnicos" element={<Tecnicos/>}/>
        <Route path="/tiposservico" element={<TiposServico/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      
    </div>
  );
}




/*

<BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/teste" element={<Teste />} />
            <Navbar/>
          </Routes>
        </BrowserRouter>

*/