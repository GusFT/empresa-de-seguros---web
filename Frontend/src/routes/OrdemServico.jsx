import Navbar from "../components/Navbar";
import "../routes/Pages.css";
import Footer from "../components/Footer";
import CRUD from "../CRUD/CRUDos";


function OrdemServico(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">

                <h1>Ordem de serviço </h1>
                
                <CRUD
                title="Chamado de serviço"
                cName="form-container"
                chamadof1="nome cliente"
                chamadof2="serviço desejado"
                chamadof3="descrição"
                field1="técnico resposável"
                field2="id do serviço"
                tField1="Relato do sistema" rows1="8"
                button1="Adicionar"
                crudUrl='http://localhost:5285/api/Ordem_servico'
                /> 
            </div>
            <Footer/>
        </> 
    );
}

export default OrdemServico;