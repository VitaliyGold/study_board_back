import { ApiProperty } from "@nestjs/swagger";
import { adminData, studentData } from "./../../consts/user";


const example_student_data = {
    email: 'email@yandex.ru',
    password: '123456',
    student_fio: 'Иванов Иван Иванович',
    study_field: 'Прикладная математика и информатика',
    student_group: '111234',
    student_course: 4
}

export class CreateUserViewDto {

    @ApiProperty({ enum: [1, 2, 3], description: 'тип пользователя' })
    readonly user_type: number;

    @ApiProperty({ example: example_student_data, description: 'данные для создания пользователя' })

    user_data: studentData

}