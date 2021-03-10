import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGid } from './components/GifGid';


const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Power Rangers']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    categories.map( category =>
                        <GifGid 
                            key={category}
                            category={category}/>
                    )
                }
            </ol>
        </>
    );
}


export default GifExpertApp;