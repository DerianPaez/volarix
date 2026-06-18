import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre debe tener menos de 100 caracteres"),
    email: z.email("El email debe ser válido"),
    phone: z.string().trim().regex(/^\+?[0-9]{7,15}$/, "Ingresa un teléfono válido"),
    destination: z.string().trim().optional(),
    message: z.string().trim().max(1000, "El mensaje debe tener menos de 1000 caracteres").optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

export type FormState = {
    success?: boolean,
    message?: string,
    errors?: {
        name?: string[],
        email?: string[],
        phone?: string[],
        destination?: string[],
        message?: string[],
    }
}
