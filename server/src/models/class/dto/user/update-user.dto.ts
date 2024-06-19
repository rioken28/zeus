import { plainToInstance } from "class-transformer";
import { UserEntity } from "../../../../database/entities/user.entity";


class UpdateUserDto{

    username?:string;
    password?:string;
}

export default UpdateUserDto;