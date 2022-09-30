import React from "react";

const Categorias = () => {

    const categorias = [
        {nombre:"Categoria 1", id:0, ruta:"#"},
        {nombre:"Categoria 2", id:1, ruta:"#"},
        {nombre:"Categoria 3", id:2, ruta:"#"},
        {nombre:"Categoria 4", id:3, ruta:"#"},
    ];

    return (
            <nav>
            {
                categorias.map( (categoria) => {
                    return <a key={categoria.id} style={styles.aCategorias} href={categoria.ruta}>{categoria.nombre}</a>
                })
            }
            </nav>
    );
};

export default Categorias;

const styles = {
    aCategorias : {
        listStyle: "none",
        textDecoration: "none",
        fontSize: "120%",
        fontWeigth: "bolder",
        padding: "1vh",
        margin: "2vh",
        backgroundColor: "white",
        color: "rgb(222,42,28)",
        borderRadius: "6vh",
        border: "solid black 2px",
    },

    logoNavbar : {
        maxWidth: "15vw",
        maxHeigth: "10vh",
    },
    menu : {
        display: "flex",
    },
}