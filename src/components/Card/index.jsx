
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.svg";
import iconeDesfavoritar from "./desfavoritar.svg";
import {useFavoritoContext} from "hooks/useFavoritoContext";
import { Link } from "react-router-dom";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icone = isFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/player/${id}`}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
