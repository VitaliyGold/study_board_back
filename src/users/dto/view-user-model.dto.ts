import { roleType } from "src/consts/roles";
import { ApiProperty } from "@nestjs/swagger";


export class ViewUserDto {

    @ApiProperty({ example: 'kysko68@mail.com', description: 'Почта пользователя' })
    readonly email: string;

    @ApiProperty({ example: '123456789', description: 'Пароль пользователя' })
    readonly password: string;

    @ApiProperty({ example: 'studens', description: 'Роль пользователя' })
    role: roleType;
}