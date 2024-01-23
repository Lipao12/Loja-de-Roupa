import React, { useContext } from 'react';
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../context/ShopContext";
//import colecoes from '../assets/colecoes';
import '../styles/breadcrum.css';

const BreadCrum = (props) => {
    const { colecoes } = useContext(ShopContext);
    const colecao = colecoes.find(c => c.id === props.product.collection_id);

    return (
        <div className="breadcrum">
            <Link to='/'>HOME</Link>
            <FiChevronRight className="icon" />
            <Link to={`/colecao/${colecao.id}`}>{colecao.name.toUpperCase()}</Link>
            <FiChevronRight className="icon" />
            <span className="spacer">CAMISA</span>
            <FiChevronRight className="icon" />
            {props.product.name}
        </div>
    );
}

export default BreadCrum;
