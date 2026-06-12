import { prisma } from "../config/prisma"
import { Prisma } from "../../generated/prisma/client"

export const getMovies = () => {
    return prisma.movie.findMany()
}

export const getMovieById = (id: number) => {
    return prisma.movie.findUnique({ where: {id}})
}

export const createMovie = (movie: Prisma.MovieCreateInput) => {
    return prisma.movie.create({ data: movie })
}

export const updateMovie = (id: number, movie: Prisma.MovieCreateInput) => {
    return prisma.movie.update({ 
        where: {id},
        data: movie
    })
}

export const deleteMovie = (id: number) => {
    return prisma.movie.delete({where: {id}})
}