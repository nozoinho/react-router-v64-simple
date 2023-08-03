import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
  const navigation = useNavigation();

  // loading : cargando la data
  // idle: cuando termina de cargar la data

  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <Outlet />
        {/* Outlet permite mostrar el contenido de cada pagina ingresada en index.jsx */}
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
};

export default LayoutPublic;
