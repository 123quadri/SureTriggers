

import { Router } from "express";
import { prismaClient } from "../db";

const router = Router();

router.get("/available", async (req, res) => {

    try {
        const availableTriggers = await prismaClient.availableTrigger.findMany({});
        res.json({
            availableTriggers
        })
    } catch (error) {
        console.log("error getting available triggers", error);
    }

});

export const triggerRouter = router;