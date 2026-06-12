import { request, Request, Response } from "express"
import { getMovies, createMovie, getMovieById, updateMovie, deleteMovie, addGenresToMovie } from "../repositories/moviesRepository"
import { prisma } from "../config/prisma"

export const moviesController = {
    async list(req: Request, res: Response) {
        try {
            const movies = await getMovies()
            res.json(movies)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar filmes" })
        }
    },

    async listById(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const movie = await getMovieById(id)
            res.json(movie)
        } catch (error) {
            res.status(500).json({ error: "Erro ao buscar filmes" })
        }
    },

    async create(req: Request, res: Response) {
        try {
            const {title, description, releaseYear} = req.body
            const movie = await createMovie({ title, description, releaseYear})
            res.status(201).json(movie)
        } catch (error) {
            res.status(500).json({ error: "Erro ao adicionar filme" })
        }
    },

    async update(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const {title, description, releaseYear} = req.body
            const movie = await updateMovie( id, { title, description, releaseYear})
            res.status(201).json(movie)
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar filme" })
        }
    },
    
    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        try {
            const movie = await deleteMovie(id)
            res.status(201).json(movie)
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar filme" })
        }
    },

    async addGenres(req: Request, res: Response) {
        const id = Number(req.params.id)
        const { genreIds } = req.body

        try {
            const movie = await addGenresToMovie(id, genreIds)
            res.status(201).json(movie)
        } catch (error) {
            res.status(409).json({error: "Esse gênero já está associado ao filme."})
        }
        
    }
}