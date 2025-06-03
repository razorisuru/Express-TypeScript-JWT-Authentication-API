import bcrypt from 'bcryptjs';
import { User } from '../models/user.model';
import { generateToken } from '../utils/jwt';

export const register = async (username: string, password: string, email:string, firstName: string, lastName: string, role: 'user' | 'admin') => {
  const existingUser = await User.findOne({ username });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword ,email, firstName, lastName, role});
  await newUser.save();

  return { id: newUser._id, username: newUser.username, email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName, role: newUser.role };
};

export const login = async (username: string, password: string) => {
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken({ id: user._id, username: user.username });
  return { token };
};
