import prisma from "../config/db.js";
import { User, UserCreateInput } from "../types/index.types.js";


export const createUser = async (data: UserCreateInput): Promise<User> => {
    try {
        return await prisma.user.create({ data })
    } catch (error) {
        console.log('create user error in service', error)
        throw error

    }

}
export const getAll = async (): Promise<User[]> => {
    try {
        return await prisma.user.findMany()
    } catch (error:unknown) {
        console.log('All user error in service', error)
        throw error

    }

}
export const deleteUser = async (id:number): Promise<User | null> => {
    try {
        return await prisma.user.delete({ where:{id} })
    } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
      return null; // Handle "Record not found" error
    }
        console.log('Delete user error in service', error)
        throw error

    }

}