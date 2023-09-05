import styles from "./Player.module.css";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "json/db.json";
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  return video ? (
    <>
      <Banner imagem="player" />
      <Titulo>Player</Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  ) : (
    <NaoEncontrada />
  );
}

export default Player;
