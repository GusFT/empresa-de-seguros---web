import "./Footer.css"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left">
                <h1>Argus Security</h1>
                <p>Ao seu lado em qualquer perrengue</p>
            </div>
            
            <div className="right">
                <div className="topRight">
                    <h1>Fale Conosco</h1>
                    <p>+55 (31) 1234-5678</p>
                    {/* <p>WhatsApp: +55 (31) 9 1234-5678</p> */}
                    <p>contato@argus.com.br</p>
                </div>
                <div className="botRight">
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;