export default function Form() {
  return (
    <div className="flex justify-center items-center mt-10 pt-16">
      <form className="flex space-x-2 w-full max-w-lg">
        <input
          className="flex-1 px-3 py-2 border-2 shadow-sm rounded-full"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add indredient"
        />
        <button
          className={
            "bg-black text-white font-semibold px-4 py-2 rounded-full cursor-pointer before:content-['+'] before:mr-2 text-sm"
          }
          type="submit"
        >
          Add Ingredients
        </button>
      </form>
    </div>
  );
}
