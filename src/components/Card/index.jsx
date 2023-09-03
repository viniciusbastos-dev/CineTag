import { useFavoritoContext } from "contexts/Favoritos";
import styles from "./Card.module.css";
import iconeFavoritar from "./favoritar.svg";
import iconeDesfavoritar from "./desfavoritar.svg";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  console.log(favorito);
  const icone = isFavorito ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
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
