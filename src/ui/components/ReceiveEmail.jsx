import '../styles/receive-email.css';

const Footer = ()=>{
    const year = new Date().getFullYear()
    return (
        <div className='contact'>
        <h2>Receba Ofertas Exclusivas Pelo Email</h2>
        <div>
            <input type='email' placeholder='Entre com o seu email...' />
            <button>Inscreva</button>
        </div>
        </div>
    );
};

export default Footer;