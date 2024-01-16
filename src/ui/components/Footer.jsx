import { AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../assets/logo1.jpg';
import '../styles/footer.css';

const Footer = ()=>{
    const year = new Date().getFullYear()
    return (
        <div className='container-footer'>
            <div className='name-logo-footer'>
                <img src={Logo} />
                <h1>Lojinha</h1>
            </div>
            <div className='footer-icons'>
                <div className='footer-icon-container'>
                    <AiOutlineInstagram size='50px' color='#ccc'/>
                </div>
                <div className='footer-icon-container'>
                    <AiOutlineWhatsApp size='50px' color='#ccc'/>
                </div>
                <div className='footer-icon-container'>
                    <AiOutlineMail size='50px' color='#ccc'/>
                </div>
            </div>

            <hr />
            
            <footer>
                <p>Copyright ⓒ {year} - All Right Reserved</p>
            </footer>
        </div>
        
    );
};

export default Footer;