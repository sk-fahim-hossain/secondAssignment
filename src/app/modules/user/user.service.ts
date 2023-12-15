import { User } from '../user.model';
import { TUser } from './user.interface';

const createUserIntoDB = async (userData: TUser): Promise<TUser> => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }
  const user = new User(userData);

  const result = user.save();
  return result;
};

const getAllUsersFromDB = async (): Promise<TUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDb = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User is not exists');
  }
  const result = await User.aggregate([{ $match: { userId: userId } }]);
  return result;
};

const updateSingleUserToDB = async (userId: number, userData: TUser) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User is not exists');
  }
  const result = await User.updateOne({ userId: userId }, userData);
  return result;
};

const deleteUserFromDB = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User is not exists');
  }
  const result = await User.deleteOne({ userId: userId });

  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDb,
  updateSingleUserToDB,
  deleteUserFromDB,
};
