import { Link } from 'react-router-dom';
import colecoes from '../assets/colecoes';
import '../styles/breadcrum.css';

const BreadCrum = (props) => {
    const colecao = colecoes.find(c => c.id === props.product.collectionId)
    return (
        <div className="breadcrum">
            <Link to='/'>HOME</Link> / <Link to={`/colecao/${colecao.id}`}>{colecao.name.toUpperCase()}</Link> / 
            CAMISA / {props.product.name}
        </div>
    )
}

export default BreadCrum;