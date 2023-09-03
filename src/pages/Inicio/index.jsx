import styles from "./Inicio.module.css";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import videos from "json/db.json";

const Inicio = () => {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        Um lugar para guardar seus videos e filmes!
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card key={video.id} {...video} />
        ))}
      </section>
    </>
  );
};

export default Inicio;
