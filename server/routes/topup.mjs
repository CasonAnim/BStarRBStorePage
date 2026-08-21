import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";
import requireAuth from "../middleware/requireAuth.mjs"

const collection = db.collection("purchaseLog")
const router = express.Router();
router.use(express.json());

router.post("/", requireAuth ,async (req, res) => {
    console.log("ข้อมูลผู้ใช้จาก Token:", req.user);

    try {
        const userId = req.user._id;
        const topupAmount = Number(req.body.topupAmount);

        if (!userId) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        if (!topupAmount || topupAmount <= 0) {
            return res.status(400).json({ message: "Invalid top-up amount" });
        }
        const newLog = {
            userId: new ObjectId(userId),
            amount: topupAmount,
            purchaseWhen: new Date()
        };

        await collection.insertOne(newLog);

        const usersCollection = db.collection("hashUserTest");
        const queryAdd = await usersCollection.updateOne(
            { _id: new ObjectId(userId) },
            { $inc: { balance: topupAmount } }
        );  

        if (queryAdd.matchedCount === 0) return res.status(404).send("User not found");

        return res.status(200).json({ message: "Top-up successful" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export default router