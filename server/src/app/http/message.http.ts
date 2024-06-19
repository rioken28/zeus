export enum HttpMessage{
    ok = "solicitud exitosa",
    CREATED = "Recurso creado con exito",
    UPDATE = "Recurso actualiado con exito",
    DELETE ="Recurso borrado con exito", 
    NO_CONTENT = "El recurso existe pero no hay contenido", 
    BAD_REQUEST = "Problemas con la solicitud del cliente",    
    UNAUTHORIZE = "No tiene autorizacion para acceder al recurso",
    FORBIDDEN = "No tiene las credenciales necesaria para acceder al recurso", 
    NOT_FOUND ="Recurso no encontrado",
    SERVER_ERROR = "Erro interno del servidor"
}