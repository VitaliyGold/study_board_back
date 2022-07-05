import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector: Reflector
        ) {

    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const requiredRole = this.reflector.getAllAndOverride( )
            const authHeader = req.headers.authorization;
            const authSplit = authHeader.split(' ')
            const bearer = authSplit[0]
            const token = authSplit[1]
            
            if (bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
            }

            const user = this.jwtService.verify(token)
            req.user = user;
            return true
        } catch (e) {
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN)
        }
    }
}