import React from "react";
import CarritoLogo from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    return (
            <CarritoLogo sx={{ fontSize: "6vh", color: "#fff" }} style={styles.carrito}/>
    );
};

export default CartWidget;

const styles = {
    carrito : {
        margin: "2vw",
        padding: "0.5vw",
        border: "solid white 0.25vw",
        borderRadius: "1vw",
    },
}