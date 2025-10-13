import "dotenv/config"
const {
    PORT,
    DB_URL,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_PORT
} = process.env



if (!DB_URL) throw new Error("Missing DB_URL in .env");

// console.log('env',{
//     PORT,
//     DB_URL,
//     POSTGRES_DB,
//     POSTGRES_PASSWORD,
//     POSTGRES_PORT,
//     POSTGRES_USER
// })

export {
    PORT,
    DB_URL,
    POSTGRES_DB,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    POSTGRES_USER
}