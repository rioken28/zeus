
export class HttpException extends Error{

    public status:number;
    constructor(message:string, status:number ){
        super(message);
        this.status = status
    }
}

export class InternalServerError extends HttpException{
    
    constructor(message:string = "Internal Server Error", status:number = 500){
        super(message, status);
    }

}


export class NotFoundException extends HttpException{
    
    constructor(message:string = "Resource Not found", status:number = 404){
        super(message, status);
    }

}

export class BadRequestException extends HttpException{
    errors?:Array<String>;
    constructor(message:string = "Bad Request", status:number = 400, errors?:Array<String>){
        super(message, status);
        this.errors = errors;
    }
}

export class UnauthorizedException extends HttpException{
    errors?:Array<String>;
    constructor(message:string = "Unauthorized", status:number = 401, errors?:Array<String>){
        super(message, status);
        this.errors = errors;
    }
}

export class ForbiddenException extends HttpException{
    errors?:Array<String>;
    constructor(message:string = "Forbidden", status:number = 403, errors?:Array<String>){
        super(message, status);
        this.errors = errors;
    }
}