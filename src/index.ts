import dotenv from "dotenv";
import express from "express";

async function start() {

    // load environment variables
    dotenv.config({
        path: "./.env"
    });

    // create express app
    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(process.env.HTTP_PORT, () => {
        console.log(`Server listening on port ${process.env.HTTP_PORT}`);
    });
}

    start();
    
