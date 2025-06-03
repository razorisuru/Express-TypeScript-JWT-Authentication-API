import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const generateToken = (payload: object): string =>
  jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });

export const verifyToken = (token: string): any =>
  jwt.verify(token, config.jwtSecret);
