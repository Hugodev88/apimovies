import { prisma } from "../config/prisma"
import { Prisma } from "../../generated/prisma/client"

export const getMovies = async () => {
    const movies = await prisma.movie.findMany({
        include: {
            movieGenres: {
                include: {
                    genre: true
                }
            }
        }
    })
    
    return movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        releaseYear: movie.releaseYear,
        genres: movie.movieGenres.map(mg => mg.genre.name),
    }))
}

export const getMovieById = (id: number) => {
    return prisma.movie.findUnique({ where: {id}})
}

export const createMovie = ({title,description,releaseYear,genreIds}: {title: string,description?: string, releaseYear?: number, genreIds: number[]}) => {
    return prisma.movie.create({
        data: {
            title,
            description,
            releaseYear,
            movieGenres: {
                create: genreIds.map((genreId) => ({
                    genre: {
                        connect: {
                            id: genreId
                        }
                    }
                }))
            }
        },
        include: {
            movieGenres: {
                include: {
                    genre: true
                }
            }
        }
    })
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

export const addGenresToMovie = (id: number, genreIds: number[]) => {
    return prisma.movie.update({where: {id},
        data: {
            movieGenres: {
                create: genreIds.map((genreId) => ({
                    genre: {
                        connect: {
                            id: genreId
                        }
                    }
                }))
            }
        }
    })
}

