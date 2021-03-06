import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
    controllers: [ RolesController ],
    providers: [ RolesService ],
    imports: [
        SequelizeModule.forFeature([ Role ])
    ]
})
export class RolesModule {
}
