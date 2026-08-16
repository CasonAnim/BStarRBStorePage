import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";

const collection = db.collection("purchaseLog")
const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
    try {
        const userId = req.body.userId;
        const topupAmount = req.body.topupAmount;

        const newLog = {
            userId: new ObjectId(userId),
            amount: topupAmount,
            purchaseWhen: new Date()
        };

        await collection.insertOne(newLog);

        const usersCollection = db.collection("userAccTest");
        const queryAdd = await usersCollection.updateOne(
            { _id: new ObjectId(userId) },
            { $inc: { balance: topupAmount } }
        );

        if (queryAdd.matchedCount === 0) return res.status(404).send("User not found");

        res.status(200).send({ message: "Top-up successful" });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error");
    }
});

export default router