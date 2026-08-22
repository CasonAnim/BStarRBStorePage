import express from "express";
import db from "../db/conn.mjs"; // ปรับ path ให้ตรงกับไฟล์เชื่อมต่อ MongoDB ของคุณ

const router = express.Router();

// ดึงข้อมูลข่าวสารทั้งหมดจาก Collection newsBrawlStar
router.get("/", async (req, res) => {
  try {
    let collection = await db.collection("newsBrawlStar");
    let results = await collection.find({}).sort({ newsId: 1 }).toArray();
    res.status(200).send(results);
  } catch (err) {
    console.error("Error fetching news:", err);
    res.status(500).send("Error fetching news");
  }
});

export default router;