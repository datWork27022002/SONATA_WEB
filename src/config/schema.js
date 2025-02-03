import { z } from 'zod';

export const SignInSchema = z.object({
    username: z.string().min(1, 'username is required'),
    password: z.string().min(1, 'password is required'),
});
