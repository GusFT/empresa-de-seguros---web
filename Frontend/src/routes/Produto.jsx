import Navbar from "../components/Navbar";
import CRUD from "../CRUD/CRUDprod";
import "../routes/Pages.css";
import Footer from "../components/Footer";

function Produto(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">
                <h1>Produto</h1>
                <CRUD
                title="Cadastro de produtos"
                cName="form-container"
                field1="nome do produto"
                field2="código do produto"
                field3="tipo"
                field4="setor"
                tField1="descrição" rows1="4"
                button1="Adicionar produto"
                crudUrl='http://localhost:5285/api/Produto'
                />
            </div>
            <Footer/>
        </> 
    );
}

export default Produto;