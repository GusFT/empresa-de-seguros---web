import Navbar from "../components/Navbar";
import "../routes/Pages.css";
import Footer from "../components/Footer";
import CRUD from "../CRUD/CRUDcli";

function Cliente(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">

                <h1>Cliente</h1>

                <CRUD
                title="Cadastro de cliente"
                cName="form-container"
                field1="name"
                field2="email"
                field3="tel"
                field4="serviço prestado"
                tField1="descrição" rows1="4"
                button1="Cadastrar cliente"
                crudUrl='http://localhost:5285/api/Cliente'
                />
            </div>
            
            <Footer/>
        </> 
    );
}

export default Cliente;

// <FormCliente/>

{/* <FormModel
                title="Cadastro de cliente"
                cName="form-container"
                field1="name"
                field2="email"
                field3="tel"
                field4="serviço prestado"
                tField1="descrição" rows1="4"
                button1="Cadastrar cliente"
                />           */}