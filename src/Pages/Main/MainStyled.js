import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 25px;

    background-color: #F1F1F1;
`;

export const TitleContainer = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 30px;
`;

export const Content = styled.div`
    width: 25vw;
    height: 55vh;

    background-color: #FFF;

    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);

    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 15px;
`;

export const ResultContainer = styled.div`
    width: 100%;
    height: 45px;

    display: flex;
    align-items: center;

    padding-inline: 8px;

    border: 2px solid #045ccc;
`;

export const Result = styled.p`
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
`;

export const RangeContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 15%;
`;

export const Range = styled.input`
    width: 90%
`;

export const CharacterLength = styled.p`
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
`;

export const OptionsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    
    gap: 10px;
`;

export const Option = styled.div`
    display: flex;
    align-items: center;

    gap: 15px;
`;

export const OptionText = styled.p`
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
`;

export const Button = styled.button`
    width: 100%;

    background-color: #045ccc;

    font-size: 18px;
    color: #FFF;

    padding: 12px;

    border: none;
`;