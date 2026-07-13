import useQuiosco from "../hooks/useQuiosco";
import Categorias from "./Categoria.jsx";
import { useAuth } from "../hooks/useAuth.js";

export default function Sidebar() {
  const { categorias } = useQuiosco();
  const { logout, user } = useAuth({ middleware: "auth" });
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="" />
      </div>
      <p className="text-xl font-bold mb-4 text-center">Hola: {user?.name}</p>
      <div className="mt-10">
        {categorias.map((categoria) => (
          <Categorias categoria={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <button onClick={logout} type="button" className="text-center bg-red-500 w-full p-3 font-bold text-white truncate">
          Cancelar Orden
        </button>
      </div>
    </aside>
  );
}
