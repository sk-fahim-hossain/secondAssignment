import { Request, Response } from 'express';
import { userServices } from './user.service';
import userValidationSchema from './user.validation';

const userCreate = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParsedData = userValidationSchema.parse(userData);
    const result = await userServices.createUserIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();

    res.status(200).json({
      success: true,
      message: 'All user retrived successfully.',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};
const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  try {
    const result = await userServices.deleteUserFromDB(Number(userId));
    res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userId = Number(id);
  try {
    const result = await userServices.getSingleUserFromDb(userId);
    res.status(200).json({
      success: true,
      message: 'User retrived successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const userId = Number(id);
  const userData = req.body;

  try {
    const result = await userServices.updateSingleUserToDB(userId, userData);
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong.',
      data: error,
    });
  }
};

export const userController = {
  userCreate,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
