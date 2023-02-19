import { parseResult } from '../utils/parseResult';
import User from '../models/user';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
}

type ICreateUser = Omit<IUser, 'id'>;

export const createUser = async (user: ICreateUser): Promise<IUser> => {
  const result = await User.create(user);

  return parseResult(result);
};

export const getUserById = async (userId: number): Promise<IUser> => {
  const result = await User.findByPk(userId);

  return parseResult(result);
};
