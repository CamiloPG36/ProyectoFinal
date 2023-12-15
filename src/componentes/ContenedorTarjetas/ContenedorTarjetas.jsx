import "./ContenedorTarjetas.css";
import Tarjetas from "../Tarjetas";
import { useEffect, useState } from "react";
import axios from "axios";

const ContenedorTarjetas = () => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key = "eceb7b18c86dea73f36a6f9ccbd81210";
  const hash = "3102c227fb50e6d53322a598b04412b2";
  const categoria = "comics";
  const url = `http://gateway.marvel.com/v1/public/${categoria}?ts=${ts}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(datos);
      } catch (error) {
        console.log("Hubo un error: ", error);
      }
    };
    solicitud();
  }, []);

  return (
    <>
      <main className="contenedor">
        {/* <Tarjetas
          ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/6/10/6572290aafe40/detail.jpg"
          titulo="Card title"
          descripcion="Soy una descripción"
        /> */}

        {datos.map((item) => (
          <Tarjetas
            key={item.id}
            ruta={`${item.thumbnail.path}/portrait_uncanmy.${item.thumbnail.extension}`}
            titulo={item.title}
            descripcion={item.description}
          />
        ))}
      </main>
    </>
  );
};

export default ContenedorTarjetas;
