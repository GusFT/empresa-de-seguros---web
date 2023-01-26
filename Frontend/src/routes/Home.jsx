import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../routes/Pages.css";

function Home(){
    return(
        <>
            <Navbar/>
            <div className="Pages-container">
                <h1>Home</h1>
                <h1>TWM: Projeto Seguro </h1>
                <p> Projeto apresentado a disciplina de TWM, modelo de um site, em react, com a tematica de uma empresa de seguros. </p>
                <p> Desenvolvido por: Gustavo ferreira Tavares - 2023 </p>                
            </div>
            <Footer/>
        </> 
    );
}

export default Home;