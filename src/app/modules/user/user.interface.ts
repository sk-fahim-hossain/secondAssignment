import { Model } from 'mongoose';

export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TAddress = {
  street: string;
  city: string;
  country: string;
};

export type TOrdersArr = {
  productName: string;
  price: number;
  quantity: number;
};

export type TUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TAddress;
  orders: TOrdersArr[];
};

//creating static
export interface UserModel extends Model<TUser> {
  isUserExists(id: number): Promise<TUser | null>;
}
