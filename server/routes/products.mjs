import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";
import e from "express";


const router = express.Router();
const logMiddleWare = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next();
}
router.use(logMiddleWare);

router.use(express.json())

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

router.post("/", async (req, res) => {
    try {
        const newUser ={
            id: req.body.id,
            name : req.body.name
        }
        const DB = db.collection("users")
        const result = await DB.insertOne(newUser)
        console.log("Successfully Added")
        res.status(200).send("Good to Go")
    } 
    catch (err){
        console.error(err)
        res.status(500).send("Error")
    }
}
)

router.patch("/:id", async (req, res) => {
    try {
        const target = {id: parseInt(req.params.id)}
        const query = {
            $set: {
                name : req.body.name
            }
        }
        const DB = db.collection("users")
        const result = await DB.updateOne(target, query)
        if (result.matchedCount === 0) return res.status(404).send("Not found");
        res.sendStatus(200)
        console.log("Got it")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error")
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const target = {id: parseInt(req.params.id)}
        const DB = db.collection("users")
        const result = await DB.deleteOne(target)
        if (result.deletedCount === 0) return res.status(404).send("Not found");
        res.sendStatus(200)
        console.log("Got it")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error")
    }
})


export default router