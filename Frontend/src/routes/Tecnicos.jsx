import Navbar from "../components/Navbar";
import CRUD from "../CRUD/CRUDtec";
import Footer from "../components/Footer";

function Tecnicos(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">
                <h1>Técnicos</h1>
                <CRUD
                title="Cadastro de Técnicos"
                cName="form-container"
                field1="nome do técnico"
                field2="idade"
                field3="tempo de serviço"
                field4="área de atuação"
                tField1="introdução" rows1="4"
                button1="Adicionar tecnico"
                crudUrl='http://localhost:5285/api/Tecnico'
                />
            </div>
            <Footer/>
        </> 
    );
}

export default Tecnicos;