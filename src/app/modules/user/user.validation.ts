import { z } from 'zod';

const createUserZodSchmea = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
});
export const UserValidation = {
  createUserZodSchmea,
};

// await createUserZodSchmea.parseAsync(req)
