import { z } from 'zod';

const TFullNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const TAddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const TOrdersArrSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  userName: z.string(),
  password: z.string(),
  fullName: TFullNameSchema,
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: TAddressSchema,
  orders: z.array(TOrdersArrSchema),
});

export default userValidationSchema;
