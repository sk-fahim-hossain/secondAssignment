import { UserModel } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser) => {
  const user = new UserModel(userData);
  const result = user.save();
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};
export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
};
