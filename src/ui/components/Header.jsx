import { useContext } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import Logo from '../assets/logo1.jpg';
import '../styles/header.css';
import Button from './Button';

const Header = () => {
    const { cartItems } = useContext(ShopContext);
    const cartItemCount = Object.values(cartItems).reduce((total, item) => total + item.quantidade, 0);

    return (
        <header>
            <div className='name-logo'>
                <img src={Logo} alt="Logo" />
                <Link to='/'><h1>Lojinha</h1></Link>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Pesquisar produtos" />
                <button>Buscar</button>
            </div>
            
            <div className='nav-login-cart'>
                <Button name='Login'/>
                <Link to={'/carrinho'}><div className='cart'><FiShoppingCart className='cart-icon-react'/></div></Link>
                {cartItemCount > 0 && <div className='nav-cart-count'>{cartItemCount>9?'+9':cartItemCount}</div>}
            </div>
        </header>
    );
};

export default Header;
