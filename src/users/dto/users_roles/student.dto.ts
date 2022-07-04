import { ApiProperty } from "@nestjs/swagger";


export class AdminDataDto {

    readonly user_type: number;

    @ApiProperty({ example: 'kysko68@mail.com', description: 'Почта пользователя' })
    
    readonly email: string;

    @ApiProperty({ example: '123456789', description: 'Пароль пользователя' })

    readonly password: string;

    @ApiProperty({ example: 'Иванов Иван Иванович', description: 'ФИО студента' })

    student_fio: string;

    @ApiProperty({ example: 'Прикладная математика и информатика', description: 'Направление обучения' })

    study_field: string;
    
    @ApiProperty({ example: '31102', description: 'Номер группы студента' })

    student_group: string;

    @ApiProperty({ example: 4, description: 'Курс студента' })

    student_course: number
    
}