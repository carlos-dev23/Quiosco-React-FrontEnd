import useQuiosco from "../hooks/useQuiosco";

export default function Categorie({ categoria }) {
  const { handleClickCategoria } = useQuiosco();
  const { icono, id, nombre } = categoria;
  return (
    <div onClick={() => handleClickCategoria(id)} className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
      <img src={`/img/icono_${icono}.svg`} alt="Imagen icono" className="w-12" />
      <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  );
}
