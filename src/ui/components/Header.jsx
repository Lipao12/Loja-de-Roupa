import '../styles/header.css';
import Button from './Button';

const Header = ()=>{
    return (
        <header>
            <h1>Lojinha</h1>
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar produtos" />
                <button>Buscar</button>
            </div>
            <div>
                <Button name='Login'/>
                <div className='cart' />
            </div>
        </header>
    );
};

export default Header;