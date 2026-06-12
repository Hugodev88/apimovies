import { z } from "zod";

export const createMovieSchema = z.object({
    title: z
        .string()
        .min(1, "O título é obrigatório")
        .max(100, "O título deve ter no máximo 100 caracteres"),

    description: z
        .string()
        .max(500, "A descrição deve ter no máximo 500 caracteres")
        .optional(),

    releaseYear: z
        .number()
        .int("O ano deve ser um número inteiro")
        .min(1888, "Ano inválido")
        .max(new Date().getFullYear() + 5, "Ano inválido"),

    genreIds: z
        .array(z.number().int())
        .min(1, "Informe pelo menos um gênero")
});