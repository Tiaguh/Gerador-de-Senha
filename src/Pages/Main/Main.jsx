import React, { useState } from 'react';
import './Main.css';

export default function Main() {
    const [resultado, setResultado] = useState('');
    const [numeroCaracteres, setNumeroCaracteres] = useState(0);
    const [caracteresSelecionados, setCaracteresSelecionados] = useState([]);

    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*', '?', '+', '-'];

    function sortearValores() {
        let availableCaracteres = [];

        if (caracteresSelecionados.includes('letras')) {
            availableCaracteres = [...availableCaracteres, ...letras];
        }

        if (caracteresSelecionados.includes('numeros')) {
            availableCaracteres = [...availableCaracteres, ...numeros];
        }

        if (caracteresSelecionados.includes('caracteresEspeciais')) {
            availableCaracteres = [...availableCaracteres, ...caracteresEspeciais];
        }

        let senhaAleatoria = '';

        for (let i = 0; i < numeroCaracteres; i++) {
            const randomIndex = Math.floor(Math.random() * availableCaracteres.length);
            senhaAleatoria += availableCaracteres[randomIndex];
        }

        setResultado(senhaAleatoria);
    }

    function handleCheckboxChange(e) {
        const checkboxId = e.target.id;
        const isChecked = e.target.checked;

        if (isChecked) {
            setCaracteresSelecionados([...caracteresSelecionados, checkboxId]);
        } else {
            setCaracteresSelecionados(caracteresSelecionados.filter(item => item !== checkboxId));
        }
    }

    return (
        <div className="container">
            <h1>Gerador de Senha 🔐</h1>

            <div className="gerador">

                <div className='result'>
                    <p>{resultado}</p>
                </div>

                <div className='range-container'>
                    <input
                        type="range"
                        min="0"
                        max="25"
                        value={numeroCaracteres}
                        onChange={(e) => setNumeroCaracteres(parseInt(e.target.value))}
                        className="range-input"
                    />
                    <p>{numeroCaracteres}</p>
                </div>

                <div className="options-container">

                    <div className="option">
                        <input className="check-box" type="checkbox" id="letras" onChange={handleCheckboxChange} />
                        <p>Letras</p>
                    </div>

                    <div className="option">
                        <input className="check-box" type="checkbox" id="numeros" onChange={handleCheckboxChange} />
                        <p>Números</p>
                    </div>

                    <div className="option">
                        <input className="check-box" type="checkbox" id="caracteresEspeciais" onChange={handleCheckboxChange} />
                        <p>Símbolos</p>
                    </div>

                </div>

                <div className='button-container'>
                    <button
                        className='botão'
                        onClick={sortearValores}
                    >
                        Gerar
                    </button>
                </div>
            </div>
        </div>
    );
}