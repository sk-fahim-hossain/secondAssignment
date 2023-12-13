import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TOrdersArr, TUser } from './user/user.interface';

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, 'firstname required'] },
  lastName: { type: String, required: [true, 'lastName required'] },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, 'street required'] },
  city: { type: String, required: [true, 'city required'] },
  country: { type: String, required: [true, 'country required'] },
});

const ordersArrSchema = new Schema<TOrdersArr>({
  productName: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    unique: true,
    required: [true, 'user id must be unique'],
  },
  userName: {
    type: String,
    unique: true,
    required: [true, 'userName must be unique'],
  },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, unique: true, required: true },
  age: { type: Number, required: [true, 'age required'] },
  email: { type: String, required: [true, 'email address required'] },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String }],
  address: { type: addressSchema },
  orders: [{ ordersArrSchema }],
});

export const UserModel = model<TUser>('User', userSchema);
