import "./generic.css"

export function Message({estilos, msj}){

    return(<div className="msj" style={estilos}>
            <p>{msj}</p>
        </div>);
}


export function Advertencia({ad, estilos, seguir,cancelar}){

    return(
    <div className="comprobacion" style={estilos}>
        <div className="mensaje">
        <p>{ad}</p>
        </div>
        <div className="botones">
            <button className="accept" onClick={seguir}>Seguir</button>
            <button className="cancel" onClick={cancelar}>Cancelar</button>
        </div>
    </div>);

}
