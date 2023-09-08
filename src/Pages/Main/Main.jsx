import React, { useState } from 'react';

import {
    Container,
    TitleContainer,
    Content,
    ResultContainer,
    Result,
    RangeContainer,
    Range,
    CharacterLength,
    OptionsContainer,
    Option,
    OptionText,
    ButtonContainer,
    Button
} from './MainStyled.js';

import { toast } from 'react-toastify';

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
            toast.warn("Select some numbers!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else if (selectCharacters.length === 0) {
            toast.warn("Select the types of digits you want in the password.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
        <Container>
            <TitleContainer>Password Generator 🔐</TitleContainer>

            <Content>

                <ResultContainer>
                    <Result>{result}</Result>
                </ResultContainer>

                <RangeContainer>
                    <Range
                        type="range"
                        min="0"
                        max="25"
                        value={numberCharacters}
                        onChange={(e) => setNumberCharacters(parseInt(e.target.value))}
                    />
                    <CharacterLength>{numberCharacters}</CharacterLength>
                </RangeContainer>

                <OptionsContainer>

                    <Option>
                        <input type="checkbox" id="letters" onChange={handleCheckboxChange} />
                        <OptionText>Letters</OptionText>
                    </Option>

                    <Option>
                        <input type="checkbox" id="numbers" onChange={handleCheckboxChange} />
                        <OptionText>Numbers</OptionText>
                    </Option>

                    <Option>
                        <input type="checkbox" id="symbols" onChange={handleCheckboxChange} />
                        <OptionText>Symbols</OptionText>
                    </Option>

                </OptionsContainer>

                <ButtonContainer>
                    <Button onClick={generatePassword}>
                        Generate
                    </Button>
                </ButtonContainer>
            </Content>
        </Container>
    );
}