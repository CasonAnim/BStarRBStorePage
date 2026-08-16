import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";

const collection = db.collection("purchaseLog")
const router = express.Router();
router.use(express.json());

router.get("/:id" , async (req , res) => {
    try {
        const _id = {userId : new ObjectId(req.params.id)}
        const result = await collection.find(_id).toArray();

        res.status(200).send(result)
        res.status(200).send("everthing Fine")
    } catch (error) {
        console.error(error);
        res.status(500).send("Error")
    }
})

export default router