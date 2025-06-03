import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;
    let role: "user" | "admin" = "user"; // Default role
    const user = await authService.register(username, password, email, firstName, lastName, role);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({ message: (error as Error).message });
  }
};
