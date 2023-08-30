import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"
import logo from "./logo.png"
import CabecalhoLink from "components/CabecalhoLink"

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do CineTag" />
            </Link>
            <nav>
                <CabecalhoLink url="./">Home</CabecalhoLink>
                <CabecalhoLink url="./favotiros">Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho