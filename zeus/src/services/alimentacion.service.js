export function findAlimentacion(filtros){
    return fetch(`http://localhost:3000/api/v1/servicio/alimentacion/custom?cantidad=${filtros.cantidad}&fechaIni=${filtros.fechaIni}&fechaFin=${filtros.fechaFin}&servicio=${filtros.servicio}&campamento=${filtros.campamento}&empresa=${filtros.empresa}`
    ,{
        method: 'GET'
    });
}

export function findGlobal(){
    return fetch('http://localhost:3000/api/v1/global', {
        method: 'GET'
    })
}

export function createAlimentacion(data, id=''){
    return fetch(`http://localhost:3000/api/v1/servicio/alimentacion?id=${id}`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body:JSON.stringify(data)
    });
}

export function deleteAlimentacion(id){
    return fetch(`http://localhost:3000/api/v1/servicio/alimentacion/${id}`, {
        method: "DELETE"
    });
}