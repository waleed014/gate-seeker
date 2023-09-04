// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { PassportStrategy } from '@nestjs/passport';

// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { Teacher } from './schemas/teacher.schema';
// import { Model } from 'mongoose';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(@InjectModel(Teacher.name) private teacherModel: Model<Teacher>) {
//     super({
//       jwtFrom: ExtractJwt.fromHeader('authorization'),
//       secretOrKey: process.env.JWT_SECRET,
//     });
//   }

//   async validate(payload) {
//     const { id } = payload;
//     const user = await this.teacherModel.findById(id);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }
