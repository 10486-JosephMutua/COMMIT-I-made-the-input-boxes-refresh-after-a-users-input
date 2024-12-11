import React from "react";
import React, { useRef } from 'react';
export default function Header(){
const [favourite,setfavourite]= React.useState([])

const things=favourite.map((food) => {
return (
<li>{food}</li>

)
}
)

const addIngredient = useRef(null); 
   function handleSubmit(event){
 event.preventDefault()
 const formData = new FormData(event.currentTarget)
 const newIgredient = formData.get("ingredient")
 addIngredient.current.reset()
 setfavourite(prevLunch => [...prevLunch, newIgredient])
 }




  
return(
  <>
  
<div className="container">
<main>
            <form onSubmit={handleSubmit} ref={addIngredient}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {things}
            </ul>
        </main>
        </div>
</>
)

}