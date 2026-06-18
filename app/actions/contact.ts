"use server"

import { Resend } from "resend"
import { z } from "zod"

import { contactSchema, FormState } from "@/lib/validations/contact"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(_prevFormState: FormState, formData: FormData): Promise<FormState> {
    const honeypot = formData.get("company");

    if (typeof honeypot === "string" && honeypot.trim() !== "") {
        return {
            success: false,
            message: "Hemos detectado actividad sospechosa en tu solicitud."
        };
    }

    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        destination: formData.get('destination'),
        message: formData.get('message')
    }

    const validation = contactSchema.safeParse(data)
    
    if (!validation.success) {
        return {
            success: false,
            errors:  z.flattenError(validation.error).fieldErrors,
        };
    }

    const { name, email, phone, destination, message } = validation.data

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [process.env.EMAIL_TO!],
            subject: `Nuevo mensaje de ${name}`,
            replyTo: email,
            html: `
                <h2>Nuevo mensaje desde el formulario</h2>

                <p>
                <strong>Nombre:</strong> ${name}
                </p>

                <p>
                <strong>Email:</strong> ${email}
                </p>

                <p>
                <strong>Teléfono:</strong> ${phone}
                </p>

                <p>
                <strong>Destino:</strong> ${destination}
                </p>

                <p>
                <strong>Mensaje:</strong>
                </p>

                <p>${message}</p>
            `,})

      return {
        success: true,
        message: "Formulario enviado correctamente"
      }

    }catch(error){
        console.error("Exception in submitContactForm:", error);
        return {
            success: false,
            message: "Ocurrió un error inesperado al enviar tu solicitud."
        }
    }
}