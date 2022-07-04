import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { StudentsModule } from "./students/students.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { Student } from "./students/student.model";
import { AuthModule } from './auth/auth.module';

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
            models: [User, Student],
            autoLoadModels: true,
            synchronize: true
        }),
        UsersModule,
        StudentsModule,
        AuthModule
    ]
})
export class AppModule {}