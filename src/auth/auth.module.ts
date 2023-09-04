import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { MongooseModule } from '@nestjs/mongoose';
// import { TeacherSchema } from './schemas/teacher.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';
// import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './local.auth';
import { TeacherSchema } from './schemas/teacher.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]),
    // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       secret: config.get<string>('JWT_SECRET'),
    //       signOptions: {
    //         expiresIn: config.get<string | number>('JWT_EXPIRE'),
    //       },
    //     };
    //   },
    // }),
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '60s',
      },
    }),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy],
})
export class AuthModule {}
