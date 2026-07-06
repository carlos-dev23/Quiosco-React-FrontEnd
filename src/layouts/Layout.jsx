import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Resumen from "../components/Resumen";
import ModalProducto from "../components/ModalProducto";
import useQuiosco from "../hooks/useQuiosco";
import { useAuth } from "../hooks/useAuth";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function Layout() {
  const { modal, handleClickModal } = useQuiosco();
  const { user, error } = useAuth({ middleware: "auth" });

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
      <ToastContainer />
    </>
  );
}
