import {z} from 'zod';

export const registerSchema= z.object({
    name:z.string().min(3),
    email:z.string().email(),
    password:z.string().min(6),
    role:z.enum(["SUPER_ADMIN","FLEET_MANAGER","DISPATCHER","DRIVER","AUDITOR"]).default("DISPATCHER")
})

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})