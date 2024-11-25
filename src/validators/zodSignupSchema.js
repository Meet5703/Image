import { z } from 'zod';

export const zodSignupSchema = z.object({
  username:z.string().min(3),
  email: z.string().email(),
  password:z.string().min(3)
  })