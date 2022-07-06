import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TeacherCreationAttrs {
    user_id: string,
    fio: string;
    specialisation: string;
    department: string
}

@Table
export class Teacher extends Model<Teacher, TeacherCreationAttrs> {
    
    @ApiProperty({ example: '1be84976-385c-43af-93e5-2014997b49c41', description: 'id преподавателя' })
    @Column({ type: DataType.STRING, unique: true, primaryKey: true })

    user_id: string;

    @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО преподавателя' })
    @Column({ type: DataType.STRING, allowNull: false })

    student_fio: string;

    @ApiProperty({ example: 'Математика', description: 'Специализация обученя' })
    @Column({ type: DataType.STRING, allowNull: false })

    specialisation: string;
    
    @ApiProperty({ example: 'Кафедра компьютерного моделирования', description: 'Название кафедры' })
    @Column({ type: DataType.STRING, allowNull: false })

    department: string;

}