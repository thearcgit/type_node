import express from "express"
import { createUser, deleteUser, getAllUsers } from "../controller/user.controller.js"

const router = express.Router()


router.route(`/`).post(createUser).get(getAllUsers)
router.route(`/:id`).delete(deleteUser)

export default router
