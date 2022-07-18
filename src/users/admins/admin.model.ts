import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminCreationAttrs {
    user_id: string,
    fio: string,
    universe: string
}

@Table
export class Admin extends Model<Admin, AdminCreationAttrs> {
    
    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c41', description: 'id администратора' })
    @Column({ type: DataType.STRING, unique: true, primaryKey: true })

    user_id: string;

    @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО администратора' })
    @Column({ type: DataType.STRING, allowNull: false })

    fio: string;

    @ApiProperty({ example: 'Тгу державина', description: 'Название института, к которому привязан данный админ' })
    @Column({ type: DataType.STRING, allowNull: false })

    universe: string;
    

}