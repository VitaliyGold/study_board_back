import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { StudentsModule } from "./users/students/students.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { Student } from "./users/students/student.model";
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/role.model";
import { UniverseModule } from './universe/universe.module';

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
            models: [User, Student, Role],
            autoLoadModels: true,
            synchronize: true
        }),
        UsersModule,
        StudentsModule,
        AuthModule,
        RolesModule,
        UniverseModule
    ]
})
export class AppModule {}