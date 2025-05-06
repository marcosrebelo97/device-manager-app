import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { setupSwagger } from './swagger';

import router from "./router/index";
import validateEnv from "./utils/validateEnv";

dotenv.config();
validateEnv();

const PORT = process.env.PORT_BACKEND || 3000;
const urlOrigin = process.env.FRONTEND_ENDPOINT || "https://device-manager-app.vercel.app";
const app = express();

app.use(cors({
    origin: ['http://localhost:4200', urlOrigin],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
setupSwagger(app);
app.use(router);

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
});

export default app;