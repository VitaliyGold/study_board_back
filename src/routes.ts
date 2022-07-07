import { Routes } from "@nestjs/core";
import { AdminsModule } from "./users/admins/admins.module";
import { StudentsModule } from "./users/students/students.module";
import { TeachersModule } from "./users/teachers/teachers.module";
import { UsersModule } from "./users/users.module";

export const routes: Routes = [

    {
        path: 'users',
        module: UsersModule,
        children: [
            {
                path: 'students',
                module: StudentsModule
            },
            {
                path: 'teachers',
                module: TeachersModule
            },
            {
                path: 'admins',
                module: AdminsModule
            },
        ]
    }
]
    
