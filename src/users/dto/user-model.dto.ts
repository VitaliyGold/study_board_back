import { roleType } from "src/consts/roles";
export class UserDto {
    readonly email: string;
    readonly password: string;
    role: string;
    user_id: roleType
}