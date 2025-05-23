import { str, port, cleanEnv } from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        PORT_BACKEND: port({
            desc: 'Backend home port',
            example: '3000'
        }),
        NODE_ENV: str({
            choices: ['development', 'production', 'test'],
            desc: 'Define application environment',
            example: 'development'
        }),
        DATABASE_URL: str({
            desc: 'Database connection URL',
            example: 'mysql://user:password@host:port/database'
        }),
        FRONTEND_ENDPOINT: str({
            desc: 'Frontend application endpoint',
            example: 'http://localhost:4200'
        })
    })
}

export default validateEnv;