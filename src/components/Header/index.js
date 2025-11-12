import logo from "../../assets/logo-desenrola-hair-bg-transparent.png"
import iconSearch from "../../assets/icons8-search.svg"
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt=""></img>
            <form>
                <input placeholder="Cremes, hidratantes e muito mais"></input>
                <button className={styles.buttonSearch}>
                    <img src={iconSearch} alt=""></img>
                </button>
            </form>
            <div className={styles.buttonsBox}>
                <button id={styles.btnLogin}>Entre</button>
                <button id={styles.btnCad}>Cadastrar</button>
            </div>
        </header>
    );
}

export default Header;