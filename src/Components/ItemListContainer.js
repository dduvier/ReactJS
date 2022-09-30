import React from "react";

const ItemListContainer = (prop) => {

    return (
            <h1 style={styles.container}> {prop.greeting} </h1>
    );
};

export default ItemListContainer;

const styles = {
    container : {
        margin: "5vw",
    },
}