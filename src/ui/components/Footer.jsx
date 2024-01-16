import '../styles/footer.css';

const Footer = ()=>{
    const year = new Date().getFullYear()
    return (
        <div className='contact'>
        <h2>Receba Ofertas Exclusivas Pelo Email</h2>
        <div>
            <input type='email' placeholder='Entre com o seu email...' />
            <button>Inscreva</button>
        </div>
        <footer>
            <p>Copyright ⓒ {year}</p>
        </footer>
        </div>
    );
};

export default Footer;