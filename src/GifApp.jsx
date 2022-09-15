import { useState } from "react"
import { AddCategory } from "./AddCategory";


export const GifApp = () => {

    const array = ['Dragon Ball Z', 'One Piece'];

    const [categories, setCategories] = useState(array)

    //? Para usar el btn
    // const onAddCategory = () => {
    //     setCategories(['Prueba', ...categories ]);
    //     console.log(array); 
    // }
    
    console.log(categories);
    return (
        <>
            <h1>GifApp</h1>

            <AddCategory setCategories={setCategories}/>

            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })}
            </ol>
        </>
    )
}
