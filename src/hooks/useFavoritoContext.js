import { FavoritosContext } from "contexts/Favoritos";
import { useContext } from "react";

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);
  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );
    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }
  return { favorito, adicionarFavorito };
}
