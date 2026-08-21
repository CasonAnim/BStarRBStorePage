import express from 'express';
import requireAuth from '../middleware/requireAuth.mjs'; 
import { ObjectId } from 'mongodb';
import db from '../db/conn.mjs';
const router = express.Router();

const isAdmin = (req, res, next) => {
  // req.user ถูก set มาจาก requireAuth แล้ว
  if (req.user && req.user.role === 1) {
    next(); 
  } else {
    return res.status(403).json({ message: 'Access Denied: Admins Only' });
  }
};

router.post('/', requireAuth, isAdmin, async (req, res) => {
  try {
    const productsCollection = db.collection('brawlStarsAcc');

    const { price, account } = req.body;

    // ประกอบ Object ให้ตรงกับหน้าตา Document ในรูปที่คุณส่งมา
    const newProduct = {
      price: Number(price),
      status : 'avaliable',
      account: account,
      createdAt: new Date() // MongoDB ธรรมดาต้องใส่เวลาเอง
    };

    // บันทึกลง Database
    const result = await productsCollection.insertOne(newProduct);

    res.status(201).json({ 
      message: 'Product added successfully', 
      insertedId: result.insertedId 
    });

  } catch (error) {
    console.error('Insert Product Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;