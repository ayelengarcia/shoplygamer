import { useState, useEffect} from "react";
import { db } from "../../db/firebase-config.js";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

const useFirestore = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const productosCollection = collection(db, "productos");
  const ordenesCollection = collection(db, "ordenesCompra");
  const [ordenID, setOrdenID] = useState("")

  const getProductos = async () => {
    const traerDocs = await getDocs(productosCollection);
    const docs = traerDocs.docs.map((doc) => doc.data());
    setProductos(docs);
    setLoading(false);
  };

  const getOrdenes = async (nombre, email, total) => {
    const ordenCompra = {
      nombre: nombre,
      email: email,
      total: total.toLocaleString(),
      hora: serverTimestamp()
    };
    const docRef = await addDoc(ordenesCollection, ordenCompra);
    console.log("Orden guardada con éxito!", { ...ordenCompra, orden: docRef.id });
    setOrdenID(docRef.id);
  };
  

  useEffect(() => {
    getProductos();
  }, []);

  return { productos, setProductos, loading, getOrdenes, ordenID };
};

export default useFirestore;
