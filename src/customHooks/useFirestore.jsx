import { useState, useEffect } from "react";
import { db } from "../../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

const useFirestore = () => {
  const [productos, setProductos] = useState([]);
  const productosCollection = collection(db, "productos");

  const getProductos = async () => {
    const traerDocs = await getDocs(productosCollection);
    const docs = traerDocs.docs.map((doc) => doc.data());
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return { productos, setProductos };
};

export default useFirestore;
