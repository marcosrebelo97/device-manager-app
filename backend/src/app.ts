import express from "express";
import cors from 'cors';
import dotenv from "dotenv";

import router from "./router/index";
import validateEnv from "./utils/validateEnv";

dotenv.config();
validateEnv();

const PORT = process.env.PORT_BACKEND || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
});

export default app;