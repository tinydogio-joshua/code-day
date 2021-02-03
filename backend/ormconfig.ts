import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config();

export default {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/**/*.model{.ts,.js}'],
  migrations: ['./src/migrations/*.ts'],
  cli: {
    entitiesDir: __dirname + '/**/*.model{.ts,.js}',
    migrationsDir: './src/migrations',
  },
  synchronize: false,
  logging: !!process.env.DATABASE_LOGGING,
} as ConnectionOptions;
