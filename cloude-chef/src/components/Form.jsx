import {useState} from "react";

export default function Form() {

    const [ingredients,setIngredients] = useState([]);


    const ingredientItems = ingredients.map((ingredient,index)=>(
        <li className={"font-semibold py-1 list-disc"} key={index}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if (!newIngredient) return;


        setIngredients(prev => {
            const normalized = newIngredient.trim().toLowerCase();

            if (prev.map(i => i.toLowerCase()).includes(normalized)) {
                return prev;
            }

            return [
                ...prev,
                normalized.charAt(0).toUpperCase() + normalized.slice(1),
            ];
        });
        event.currentTarget.reset();

    }

    return (
    <main>
      <div className="flex justify-center items-center mt-10 pt-16">
        <form className="flex space-x-2 w-full max-w-lg" onSubmit={handleSubmit}>
          <input
            className="flex-1 px-5 py-2 border-2 border-amber-100/80  hover:border-slate-950/10 shadow-lg rounded-full focus:bg-slate-50"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add indredient"
            name = "ingredient"
          />

          <button
            className={
              "bg-slate-900 hover:bg-slate-950 hover:shadow-lg text-white font-semibold px-4 py-2 rounded-full cursor-pointer before:content-['+'] before:mr-2 text-sm"
            }
            type="submit"
          >
            Add Ingredients
          </button>
        </form>
      </div>
        <div className="flex flex-col justify-start items-start mt-10 px-20 w-screen ">
            <h1 className={"text-2xl font-bold "}>Ingredients List</h1>
            <ul className="mt-5 px-10">
                {ingredientItems}
            </ul>
        </div>
    </main>
  )
}
