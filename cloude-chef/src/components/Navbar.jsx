import { ChefHat } from "lucide-react";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-amber-50 h-16 text-slate-800 flex justify-center items-center shadow-lg fixed z-100 w-screen top-0">
        <div className="w-2/3 flex items-center justify-center h-full space-x-2">
          <ChefHat className={"text-2xl w-8 h-8"} />
          <h1 className="font-semibold text-2xl">Cloude Chef</h1>
        </div>
      </nav>
    </header>
  );
}
