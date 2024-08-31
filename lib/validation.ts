import { z } from 'zod';


export const LoginFormValidation=z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
    rememberMe:z.boolean()

})

export const ChangePasswordValidation = z.object({
    password: z
        .string()
        .min(8, "Password cannot be empty"),
    confirmPassword: z
        .string()
        .min(8, "Password cannot be empty"),
    currentPassword: z
        .string()
        .min(8, "Password cannot be empty"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must match",
    path: ["confirmPassword"],
});

