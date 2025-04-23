import dotenv from "dotenv";
import express from "express";
import { connectToDatabase } from "./lib/dbConnection";
const transactionsRouter = await import("./routes/transactions");

async function start() {

    // load environment variables
    dotenv.config({
        path: "./.env"
    });

    // connect to database
    await connectToDatabase();

    // create express app
    const app = express();

    // register routes
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.use("/transactions", transactionsRouter.default);

    app.listen(process.env.HTTP_PORT, () => {
        console.log(`Server listening on port http://localhost:${process.env.HTTP_PORT}`);
    });
}

    start();
    
