import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { Student } from "./users/students/student.model";
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/role.model";
import { UniverseModule } from './universe/universe.module';
import { Subject } from "./universe/subjects/subject.model";
import { Teacher } from "./users/teachers/teacher.model";
import { RouterModule } from "@nestjs/core";
import { routes } from "./routes";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRESS_USER,
            password: process.env.PORSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Student, Role, Subject, Teacher],
            autoLoadModels: true,
            synchronize: true,
        }),
        AuthModule,
        RolesModule,
        UniverseModule
    ]
})
export class AppModule {}