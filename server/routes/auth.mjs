import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import requireAuth from "../middleware/requireAuth.mjs"


const collection = db.collection("hashUserTest"); 
const router = express.Router();
router.use(express.json());



router.post("/register", async (req ,res) => {
    try {
        const {
            username, displayName, password 
        } = req.body

        const usedName = await collection.findOne({username})
        if (usedName) return res.status(200).send("Username has been taken!");
        
        const hashPass = await bcrypt.hash(password, 10 )

        const newUser = {
            username,
            displayName,
            password: hashPass,
            role : 0,
            balance: 0,
            createdAt: new Date()
        };

        const result = await collection.insertOne(newUser)
        res.status(200).send({message : "Done", userId : result.insertedId})
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
})

router.post("/login" , async (req , res) => {
    try {
        const { username , password} = req.body;

        const user = await collection.findOne({username})
        if (!user) return res.status(401).send("Invalid Data!");

        const passMatch = await bcrypt.compare(password ,user.password)
        if (!passMatch) return res.status(401).send("Wrong Password");

        const token = jwt.sign(
            {_id : user._id , role : user.role},
            process.env.JWT_SECRET,
            {expiresIn : "7d"}
        )
        res.status(200).send({ token, user: { _id: user._id, username: user.username, displayName: user.displayName, role : user.role} });

    } catch (
       err 
    ) {
       console.error(error);
        res.status(500).send("Error"); 
    }
})



export default router