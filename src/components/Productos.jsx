import React from "react";

export default function Productos({ producto }) {
  const { nombre, imagen, precio } = producto;
  return (
    <div className="border p-3 shadow bg-white">
      <img src={`/img/${imagen}.jpg`} alt={`imagen ${nombre}`} className="w-full" />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p>{precio}</p>
      </div>
    </div>
  );
}
