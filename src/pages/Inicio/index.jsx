import styles from "./Inicio.module.css";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/viniciusbastos-dev/cinetag-api/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setVideos(dados));
  }, []);

  return (
    <>
      <Banner imagem="home" />
      <Titulo>Um lugar para guardar seus videos e filmes!</Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  );
};

export default Inicio;
