import express from "express";
import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./cloudinary";

const router = express.Router();

//upload file satuan (single) dengan key pada POSTMANNYA adalah file
router.post("/upload/single", single, async (req, res) => {
  if (req.file) {
    try {
      const result = await handleUpload(req.file.buffer);
      res.json({ message: "File uploaded successfully", result });
    } catch (error) {
      res.status(500).json({ message: "File upload failed", error });
    }
  } else {
    res.status(400).json({ message: "File upload failed" });
  }
});

//upload file lebih dari satu (multiple) dengan key pada POSTMANNYA adalah files
router.post("/upload/multiple", multiple, async (req, res) => {
  if (req.files) {
    try {
      const uploadPromises = (req.files as Express.Multer.File[]).map(file =>
        handleUpload(file.buffer)
      );
      const results = await Promise.all(uploadPromises);
      res.json({ message: "Files uploaded successfully", results });
    } catch (error) {
      res.status(500).json({ message: "Files upload failed", error });
    }
  } else {
    res.status(400).json({ message: "Files upload failed" });
  }
});

export default router;
