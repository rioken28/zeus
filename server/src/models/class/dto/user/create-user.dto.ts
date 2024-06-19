import { plainToClass, plainToInstance } from "class-transformer";
import { UserEntity } from "../../../../database/entities/user.entity";

class userDto {
    username:string;
    password:string;
}
export default userDto;