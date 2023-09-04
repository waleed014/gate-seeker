import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'SeekGaters',
  password: 'purelogics',
  entities: ['../**/*.entity.ts'],
  // entities: [Student],
  synchronize: true,
};
