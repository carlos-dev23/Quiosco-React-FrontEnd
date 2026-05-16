import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function ModalProducto() {
  const { producto, handleClickModal } = useQuiosco();
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img src={`/img/${producto.imagen}.jpg`} alt={`Imagen ${producto.nombre}`} />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">{formatearDinero(producto.precio)}</p>
        <button type="button" className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">
          Añadir al pedido
        </button>
      </div>
    </div>
  );
}
