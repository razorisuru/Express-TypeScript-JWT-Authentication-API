import dotenv from 'dotenv';
dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || 'secret123',
  port: process.env.PORT || 5000,
};
