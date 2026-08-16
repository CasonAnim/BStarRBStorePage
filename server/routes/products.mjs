import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";
import e from "express";


const router = express.Router();

router.get("/", async (req , res) => {
    try {
        const collection = db.collection("brawlStarsAcc")
        const result = await collection.find({}).toArray();
        res.status(200).send(result)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error")
    }
})
router.get("/:id", async (req , res) => {
    try {
        const collection = db.collection("brawlStarsAcc")
        const query = { id: parseInt(req.params.id)}
        const result = await collection.findOne(query);
        if (!result) return res.status(404).send("Not found" + result + " || Params : " +req.params.id);

        res.status(200).send(result)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error")
    }
})

export default router