import { SetMetadata } from "@nestjs/common";


export const Role = ( role: number ) => {
    console.log(role)
    SetMetadata('role', role)
}