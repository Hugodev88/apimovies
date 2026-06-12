import { request, Request, Response } from "express"
import { createGenre, deleteGenre, getGenreById, getGenres, updateGenre } from "../repositories/genresRepository"

export const genresController = {
    async list(req: Request, res: Response) {
        try {
            const genres = await getGenres()
            res.json(genres)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar generos" })
        }
    },

    async listById(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const genre = await getGenreById(id)
            res.json(genre)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar genero por id" })
        }
    },

    async create(req: Request, res: Response) {
            try {
                const {name} = req.body
                const genre = await createGenre({name})
                res.status(201).json(genre)
            } catch (error) {
                res.status(500).json({ error: "Erro ao adicionar genero" })
            }
    },

    async update(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const {name} = req.body
            const genre = await updateGenre( id, { name })
            res.status(201).json(genre)
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar genero" })
        }
    },
    
    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const genre = await deleteGenre(id)
            res.status(201).json(genre)
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar genero" })
        }
    }
}