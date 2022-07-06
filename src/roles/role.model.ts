import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
    role_id: number;
    role_description: string;
}

@Table
export class Role extends Model<Role, RoleCreationAttrs> {
    
    @ApiProperty({ example: 1, description: 'id роли' })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })

    role_id: number;

    @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
    @Column({ type: DataType.STRING, allowNull: false })

    role_description: string;

}