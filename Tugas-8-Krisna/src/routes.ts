import express from "express";

import uploadMiddleware from "./middlewares/upload.middleware";
import uploadController from "./controllers/upload.controller";
import productsController from "./controllers/products.controller";
import categoriesController from "./controllers/categories.controller";

const router = express.Router();

//Routes produk
router.get("/products", productsController.findAll); // Read all 
router.post("/products", productsController.create); // Create 
router.get("/products/:id", productsController.findOne); // Read 1 product
router.put("/products/:id", productsController.update); // Update 
router.delete("/products/:id", productsController.delete); // Delete 

//Routes kategori
router.get("/categories", categoriesController.findAll); // Read all 
router.post("/categories", categoriesController.create); // Create 
router.get("/categories/:id", categoriesController.findOne); // Read 1 kategori
router.put("/categories/:id", categoriesController.update); // Update 
router.delete("/categories/:id", categoriesController.delete); // Delete 
router.get("/categories/:id/products", categoriesController.findAllProducts) // Cari semua products dalam 1 kategori 

// Upload routes
router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;
