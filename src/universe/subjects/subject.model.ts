import { ApiProperty } from "@nestjs/swagger";
import { UUIDV4 } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface SubjectCreationAttrs {
    subject_id: string,
    subject_name: string
}

@Table
export class Subject extends Model<Subject, SubjectCreationAttrs> {

    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c41', description: 'id предмета' })
    @Column({ type: DataType.UUID, unique: true, primaryKey: true, defaultValue: UUIDV4})

    subject_id: string;

    @ApiProperty({ example: 'Физика', description: 'Наименование предмета' })
    @Column({ type: DataType.STRING, allowNull: false })

    subject_name: string;

}