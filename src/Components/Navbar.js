import React from "react";
import Categorias from "./Categorias"
import CartWidget from "./CartWidget"
import Logo from "../Logo-comidas.jpg"

const Navbar = () => {

    return (
        <header style = {styles.menu}>
            <img style={styles.logoNavbar} src={Logo} alt="Logotipo del local comercial" />
            <h1 style={styles.titulo}> COMIDAS: DARI FOOD!</h1>
            <Categorias />
            <CartWidget />
        </header>
    );
};

export default Navbar;

const styles = {
    menu : {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        heigth: "10vh",
        backgroundColor: "rgb(222,42,28)",

    },
    logoNavbar : {
        maxWidth: "15vw",
        heigth: "10vh",
    },
    titulo : {
        color: "white",
    },
}