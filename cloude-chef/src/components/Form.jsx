export default function Form() {
  return (
    <main>
      <div className="flex justify-center items-center mt-10 pt-16">
        <form className="flex space-x-2 w-full max-w-lg">
          <input
            className="flex-1 px-5 py-2 border-2 border-amber-200  hover:border-slate-950 shadow-lg rounded-full focus:bg-slate-50"
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add indredient"
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
    </main>
  );
}
