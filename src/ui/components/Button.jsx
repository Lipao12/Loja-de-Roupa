import '../styles/button.css';

const Button = (props)=>{
    return (
        <button className='button'>{props.name}</button>
    );
};

export default Button;