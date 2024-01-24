import React, { useEffect, useState } from 'react';
import '../styles/virtual-fitting.css';

const VirtualFitting = ({ showPopup, closePopup }) => {
    const [height, setHeight] = useState('');
    const [abdominalCircumference, setAbdominalCircumference] = useState('');
    const [chestCircumference, setChestCircumference] = useState('');
    const [sizeSuggestion, setSizeSuggestion] = useState(null);


    useEffect(() => {
        if (showPopup) {
            setHeight('');
            setAbdominalCircumference('');
            setChestCircumference('');
            setSizeSuggestion(null);
        }
    }, [showPopup]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const size = suggestClothingSize(height, abdominalCircumference, chestCircumference);

        setSizeSuggestion(size);
    };

    const suggestClothingSize = (height, abdominalCircumference, chestCircumference) => {
        if (height < 160) {
            return 'P';
        } else if (height >= 160 && height < 180) {
            return 'M';
        } else {
            return 'G';
        }
    };

    return (
        <div className={showPopup ? 'popup' : 'popup hidden'}>
            <div className='popup-content'>
                <h2>Digite suas medidas</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Altura:
                        <input
                            type='number'
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Circunferência Abdominal:
                        <input
                            type='number'
                            value={abdominalCircumference}
                            onChange={(e) => setAbdominalCircumference(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Circunferência do Tórax:
                        <input
                            type='number'
                            value={chestCircumference}
                            onChange={(e) => setChestCircumference(e.target.value)}
                            required
                        />
                    </label>
                    {sizeSuggestion && (
                        <p>Sugestão de Tamanho: {sizeSuggestion}</p>
                    )}
                    <button type='submit'>Enviar</button>
                </form>
                <button onClick={closePopup}>Fechar</button>
            </div>
        </div>
    );
}

export default VirtualFitting;
