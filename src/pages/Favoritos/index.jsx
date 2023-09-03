import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import  {useFavoritoContext}  from "hooks/useFavoritoContext";

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          console.log(...favorito);
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};

export default Favoritos;
