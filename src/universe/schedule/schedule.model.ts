import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";
import { UUIDV4 } from "sequelize";

interface ScheduleCreationAttrs {
    password: string,
    email: string,
    role: number
}

@Table
export class Schedule extends Model<Schedule, ScheduleCreationAttrs> {

    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c4', description: 'Уникальный идентификатор пользователя в системе' })
    @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: UUIDV4 })
    schedule_id: string;

    @ApiProperty({ example: '1234567asf', description: 'Пароль' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'kysko68@yandex.ru', description: 'Почта пользователя, она же логин' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({ example: '3', description: 'Роль пользователя' })
    @Column({ type: DataType.INTEGER, allowNull: false })
    role: number
}