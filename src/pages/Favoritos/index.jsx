import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";

const Favoritos = () => {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          titulo="Teste"
          capa="https://www.github.com/viniciusbastos-dev.png"
        />
      </section>
    </>
  );
};

export default Favoritos;
