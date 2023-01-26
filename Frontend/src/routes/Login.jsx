import Navbar from "../components/Navbar";
import "../routes/Pages.css";
import Footer from "../components/Footer";
import CRUD from "../CRUD/CRUDlog";

function Login(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">

                <h1>Login</h1>

                <CRUD
                title="Acesso"
                cName="form-container"
                field1="ID"
                field2="senha"
                button1="Login"
                crudUrl='http://localhost:5285/api/Login'
                />
            </div>
            <Footer/>
        </> 
    );
}
export default Login;