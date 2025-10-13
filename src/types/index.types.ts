// import {User} from "@prisma/client"
export * from "./user.types.js"

import { Prisma } from '../generated/prisma/client.js';

// Export types for User model
export type User = Prisma.UserGetPayload<{}>;
export type UserCreateInput = Prisma.UserCreateInput;
export type UserUpdateInput = Prisma.UserUpdateInput;


// export default User