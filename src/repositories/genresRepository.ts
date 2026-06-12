import { prisma } from "../config/prisma"
import { Prisma } from "../../generated/prisma/client"

export const getGenres = () => {
    return prisma.genre.findMany()
}

export const getGenreById = (id: number) => {
    return prisma.genre.findUnique({ where: {id}})
}

export const createGenre = (genre: Prisma.GenreCreateInput) => {
    return prisma.genre.create({ data: genre })
}

export const updateGenre = (id: number, genre: Prisma.GenreCreateInput) => {
    return prisma.genre.update({ 
        where: {id},
        data: genre
    })
}

export const deleteGenre = (id: number) => {
    return prisma.genre.delete({where: {id}})
}