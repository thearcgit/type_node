import type { Request, Response } from "express"
import { User, UserCreateInput, UserType } from "../types/index.types.js"
// import { User } from "@prisma/client"
import * as userServices from "../services/user.services.js"


export const createUser = async (req: Request, res: Response): Promise<void> => {
    // console.log('body data',req.body)
    const data: UserCreateInput = req.body
    try {
        const registeredUser: User = await userServices.createUser(data)
        console.log('create user', { registeredUser, data })
        res.status(201).json({ message: "user created", registeredUser })
    } catch (error) {
        console.error("create user error", error)
        throw error
    }

}
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await userServices.getAll()
        if (users.length === 0) {
            res.status(200).json({ message: 'No users found', users: [] });
            return;
        }
        console.log('All users', { users })
        res.status(200).json({ message: "Fetched all users successfully!", users })
    } catch (error) {
        console.error("create user error", error)
        throw error
    }

}
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    // console.log('body data',req.body)
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: 'User ID is required' });
            return;
        }
        const parsedId = parseInt(id, 10);

        if (isNaN(parsedId)) {
            res.status(400).json({ message: 'Invalid user ID' });
            return;
        }
        const user = await userServices.deleteUser(parsedId);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        console.log('create user', { user })
        res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Error deleting user', error: error instanceof Error ? error.message : error });
    }

}