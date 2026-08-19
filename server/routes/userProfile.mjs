import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";
import e from "express";
const collection = db.collection("hashUserTest")
const router = express.Router();
router.use(express.json());
import requireAuth from "../middleware/requireAuth.mjs"


// router.get("/:id" , async (req ,res) => {
//     try {
//         const target = { _id : new ObjectId(req.params.id)}
//         const result = await collection.findOne(target)
//         if (!result) return res.status(404).send("Not Found")
//         res.status(200).send(result)
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error")
//     }
// })

// router.get("/" , async (req ,res) => {
//     res.send("Invalid URL")
// })

router.get("/me" , requireAuth ,async (req , res) => {
    try {
        const target = { _id : new ObjectId(req.user._id)}
        const result = await collection.findOne(target);

        if (!result) return res.status(404).send("Not_Found");
        res.status(200).send(result)

    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
})

export default router