import { Link } from 'react-router-dom';
import Logo from '../assets/logo1.jpg';
import '../styles/header.css';
import Button from './Button';

const Header = ()=>{
    return (
        <header>
            <div className='name-logo'>
                <img src={Logo} />
                <Link to='/'><h1>Lojinha</h1></Link>
            </div>
            
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar produtos" />
                <button>Buscar</button>
            </div>
            <div className='nav-login-cart'>
                <Button name='Login'/>
                <div className='cart' />
                <div className='nav-cart-count'>0</div>
            </div>
        </header>
    );
};

export default Header;