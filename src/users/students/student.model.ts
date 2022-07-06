import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface StudentCreationAttrs {
    user_id: string,
    student_fio: string,
    study_field: string,
    student_group: string,
    student_course: number
}

@Table
export class Student extends Model<Student, StudentCreationAttrs> {
    
    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c41', description: 'id студента' })
    @Column({ type: DataType.STRING, unique: true, primaryKey: true })

    user_id: string;

    @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО студента' })
    @Column({ type: DataType.STRING, allowNull: false })

    student_fio: string;

    @ApiProperty({ example: 'Прикладная математика и информатика', description: 'Направление обучения' })
    @Column({ type: DataType.STRING, allowNull: false })

    study_field: string;
    
    @ApiProperty({ example: '31102', description: 'Номер группы студента' })
    @Column({ type: DataType.STRING, allowNull: false })

    student_group: string;

    @ApiProperty({ example: 4, description: 'Курс студента' })
    @Column({ type: DataType.INTEGER, allowNull: false })

    student_course: number

}