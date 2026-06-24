import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
export default function Registro() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }
    try {
      const respuesta = await clienteAxios.post("/api/registro", datos);
      console.log('respuesta');
      console.log(respuesta);
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
      console.log(errors);
    }
  }

  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu Cuenta llenando el formulario </p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form onSubmit={handleSubmit} noValidate>
          {errors ? errors.map((error,i) => <Alerta key={i}>{error}</Alerta>) : null}
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre:
            </label>
            <input type="text" id="name" className="mt-2 w-full p-3 bg-gray-50" name="name" placeholder="Tu Nombre" ref={nameRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              Email:
            </label>
            <input type="email" id="email" className="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Tu E-mail" ref={emailRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" className="mt-2 w-full p-3 bg-gray-50" name="password" placeholder="Contraseña" ref={passwordRef} />
          </div>
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirmation">
              Repetir Password:
            </label>
            <input type="password" id="password_confirmation" className="mt-2 w-full p-3 bg-gray-50" name="password_confirmation" placeholder="Repetir Contraseña" ref={passwordConfirmationRef} />
          </div>
          <input type="submit" value="Crear Cuenta" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />
        </form>
      </div>
      <nav>
        <Link to="/auth/login">¿Tienes una cuenta?, Inicia Sesión</Link>
      </nav>
    </>
  );
}
