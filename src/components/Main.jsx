import { Route, Routes, Navigate } from "react-router-dom";
import MenuProductos from "./MenuProductos";

const Main = () => {
  return (
    <div className="contenedor-main">
      <Routes>
        <Route path="/" element={<h4 className="inicio">¡BIENVENIDOS/AS A SHOPLY GAMER! 💻</h4>} />
        
        <Route path="productos/*" element={<MenuProductos />} />

        <Route path="ayuda" element={<h4 className="inicio">Página de ayuda ‼</h4>} />
        
        <Route path="marcasSponsor" element={<h4 className="inicio">Nuestros Sponsors 🛍</h4>}/>

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Main;
