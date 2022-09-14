import { useState } from "react"


export const GifApp = () => {

    const array = ['Dragon Ball Z', 'One Piece'];
    const [categories, setCategories] = useState(array)

    const newCate = 'The Evil Within'
    
    const onAddCategory = () => {
        setCategories([newCate, ...categories ]);
        console.log(array); 
    }
    
    console.log(categories);
    return (
        <>
            <h1>GifApp</h1>
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })}
            </ol>
        </>
    )
}
