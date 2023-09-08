import React, { useState } from 'react';
import './Main.css';

export default function Main() {
    const [result, setResult] = useState('');
    const [numberCharacters, setNumberCharacters] = useState(0);
    const [selectCharacters, setSelectCharacters] = useState([]);

    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '?', '+', '-'];

    function generatePassword() {
        let availableCaracteres = [];

        if (selectCharacters.includes('letters')) {
            availableCaracteres = [...availableCaracteres, ...letters];
        }

        if (selectCharacters.includes('numbers')) {
            availableCaracteres = [...availableCaracteres, ...numbers];
        }

        if (selectCharacters.includes('symbols')) {
            availableCaracteres = [...availableCaracteres, ...symbols];
        }

        let randomPassword = '';

        if (numberCharacters < 1) {
            alert("Selecione alguns números!")
        } else if (selectCharacters.length === 0) {
            alert("Selecione os tipos de dígitos que você quer na senha.");
        } else {
            for (let i = 0; i < numberCharacters; i++) {
                const randomIndex = Math.floor(Math.random() * availableCaracteres.length);
                randomPassword += availableCaracteres[randomIndex];
            }
        }

        setResult(randomPassword);
    }

    function handleCheckboxChange(e) {
        const checkboxId = e.target.id;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectCharacters([...selectCharacters, checkboxId]);
        } else {
            setSelectCharacters(selectCharacters.filter(item => item !== checkboxId));
        }
    }

    return (
        <div className="container">
            <h1>Password Generator 🔐</h1>

            <div className="gerador">

                <div className='result'>
                    <p>{result}</p>
                </div>

                <div className='range-container'>
                    <input
                        type="range"
                        min="0"
                        max="25"
                        value={numberCharacters}
                        onChange={(e) => setNumberCharacters(parseInt(e.target.value))}
                        className="range-input"
                    />
                    <p>{numberCharacters}</p>
                </div>

                <div className="options-container">

                    <div className="option">
                        <input className="check-box" type="checkbox" id="letters" onChange={handleCheckboxChange} />
                        <p>Letters</p>
                    </div>

                    <div className="option">
                        <input className="check-box" type="checkbox" id="numbers" onChange={handleCheckboxChange} />
                        <p>Numbers</p>
                    </div>

                    <div className="option">
                        <input className="check-box" type="checkbox" id="symbols" onChange={handleCheckboxChange} />
                        <p>Symbols</p>
                    </div>

                </div>

                <div className='button-container'>
                    <button
                        className='botão'
                        onClick={generatePassword}
                    >
                        Gerar
                    </button>
                </div>
            </div>
        </div>
    );
}