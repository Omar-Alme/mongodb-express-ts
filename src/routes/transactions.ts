import express, { Request, Response } from "express";
import { httpResponse } from "../lib/httpResponse";


const router = express.Router();

// API Endpoints
router.post("/", async(req: Request & {
    body: {
        user: string;
        total: number;
        description: string;
        date: Date;
        business: string;
        items: {
            title: string;
            quantity: number;
            price: number;
        }
    }[];
}, res: Response) => {
    try {

    } catch (error) {
        return httpResponse(500, 'Internal Server Error', {}, res);
    }
});


export default router;