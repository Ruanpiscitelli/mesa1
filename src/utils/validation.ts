import { z } from 'zod';
import DOMPurify from 'dompurify';

export const formSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .transform(val => DOMPurify.sanitize(val)),
  email: z.string()
    .email('Email inválido')
    .transform(val => DOMPurify.sanitize(val)),
  whatsapp: z.string()
    .regex(/^(\d{2})\s*(\d{4,5})-?(\d{4})$/, 'WhatsApp inválido')
    .transform(val => DOMPurify.sanitize(val))
});

export type FormData = z.infer<typeof formSchema>;

export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};

export const validateForm = (data: FormData) => {
  try {
    return {
      success: true,
      data: formSchema.parse(data)
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.reduce((acc, curr) => ({
        ...acc,
        [curr.path[0]]: curr.message
      }), {});
      return {
        success: false,
        errors
      };
    }
    return {
      success: false,
      errors: { form: 'Erro de validação' }
    };
  }
}; 