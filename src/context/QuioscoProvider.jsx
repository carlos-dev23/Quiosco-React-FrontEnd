import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { categorias as categoriasDB } from "../data/categories.js";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((categoria) => categoria.id === id)[0];
    setCategoriaActual(categoria);
  };

  const handleClickModal = () => {
    setModal(!modal);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id)[0];
    setProducto(productoActualizar);
    setModal(!modal);
  }

  const handleAgregarPedido = ({ categoria_id, ...producto }) => {
    if (pedido.some(pedidoState => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map(pedidoState => 
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
      toast.success('Guardado correctamente');
    } else {
      setPedido([...pedido, producto]);
      toast.success('Producto Agregado Exitosamente');
    }
  };

  return (
    <QuioscoContext.Provider value={{ categorias, categoriaActual, handleClickCategoria, modal, handleClickModal, producto, handleSetProducto, pedido, handleAgregarPedido, handleEditarCantidad }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
