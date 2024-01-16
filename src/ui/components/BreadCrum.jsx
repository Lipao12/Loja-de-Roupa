import '../styles/breadcrum.css';

const BreadCrum = (props) => {
    return (
        <div className="breadcrum">
            HOME / CAMISA / {props.product.name}
        </div>
    )
}

export default BreadCrum;