import { useState } from "react";
import { GifApp } from "./GifApp";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    //Pruebas
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        setCategories(categies => [inputValue, ...categies]);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type='text'
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
