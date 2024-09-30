import React from "react";

function ButtonClick() {
    const cambiarMensaje = () => {
        alert("¡Botón clickeado!");
    }

    return (
        <div style={{padding: "10px"}}>
            <button onClick={cambiarMensaje}>Haz clic</button>
        </div>
    );
}

export default ButtonClick;