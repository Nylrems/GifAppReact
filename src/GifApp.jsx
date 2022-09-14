import { useState } from "react"


export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z', 'One Piece'])
    console.log(categories);

    return (
        <>
            <h1>GifApp</h1>

            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
