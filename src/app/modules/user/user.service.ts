import { UserModel } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  const user = new UserModel(userData);
  const result = user.save();
  return result;
};

const getAllUsersFromDB = async (): Promise<TUser[]> => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDb = async (userId: number) => {
  const id = Number(userId.id);
  const result = await UserModel.aggregate([{ $match: { userId: id } }]);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDb,
};
