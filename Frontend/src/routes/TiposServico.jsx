import Navbar from "../components/Navbar";
import CRUD from "../CRUD/CRUDserv";
import Footer from "../components/Footer";

function TiposServico(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">
                <h1>Tipos de serviços</h1>
                <CRUD
                title="Cadastro de Serviços"
                cName="form-container"
                field1="nome do serviço"
                field2="custo"
                field3="área"
                field4="duração"
                tField1="descrição" rows1="4"
                button1="Adicionar serviço"
                crudUrl='http://localhost:5285/api/Servico'
                />
            </div>
            <Footer/>
        </> 
    );
}

export default TiposServico;