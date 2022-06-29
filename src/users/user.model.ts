import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { roleType, students } from "src/consts/roles";

interface UserCreationAttrs {
    user_id: string,
    password: string,
    email: string,
    role: string
}

@Table
export class User extends Model<User, UserCreationAttrs> {
    
    @ApiProperty({ example: '1', description: 'Ключ для SQL таблицы' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })

    id: number;


    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c4', description: 'Уникальный идентификатор пользователя в системе' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    user_id: string;


    @ApiProperty({ example: '1234567asf', description: 'Пароль' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;
    

    @ApiProperty({ example: 'student', description: 'Роль пользователя в системе' })
    @Column({ type: DataType.STRING, allowNull: false, defaultValue: students })
    role: string;


    @ApiProperty({ example: 'kysko68@yandex.ru', description: 'Почта пользователя, она же логин' })
    @Column({ type: DataType.STRING, unique: true, })
    email: string
}