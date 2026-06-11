import "dotenv/config"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient, Prisma } from "../../generated/prisma/client"

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

export const getMovies = () => {
    return prisma.movie.findMany()
}

export const getMovie = (id: number) => {
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