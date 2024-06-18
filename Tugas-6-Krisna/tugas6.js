const express = require('express');
const app = express();
const port = 3000;

//Daftar Kategori
let categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' },
  { id: 3, name: 'Pakaian' }
];

//Daftar Produk
let products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' },
  { id: 3, name: 'Televisi', category: 'Elektronik' },
  { id: 4, name: 'Kursi', category: 'Perabotan' },
  { id: 5, name: 'Baju', category: 'Pakaian' }
];

// Middleware parsing JSON
app.use(express.json());

//Jawaban dari soal Buatlah route GET yang mengembalikan daftar semua kategori produk dalam aplikasi e-commerce Anda. Anda bisa asumsikan data kategori disimpan dalam array seperti ini: [{ id: 1, name: 'Elektronik' }, { id: 2, name: 'Perabotan' }].
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

//Jawaban dari soal Buatlah route GET yang mengembalikan detail kategori berdasarkan ID. Anda bisa menggunakan array kategori dari soal sebelumnya.
app.get('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === categoryId);
  
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Tidak ada kategori' });
  }
});

//Jawaban dari soal Buatlah route POST yang menambahkan kategori baru ke array. Kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian" }.
app.post('/api/categories', (req, res) => {
  const newCategory= req.body;
  const newId = categories.length ? categories[categories.length - 1].id + 1 : 1;
  const category = {
    id: newId,
    name: newCategory.name
  };
  categories.push(category);
  res.status(201).json(category);
});

//Jawaban dari soal Buatlah route PUT yang memperbarui kategori berdasarkan ID. Data kategori baru harus diberikan melalui body request dalam bentuk JSON, seperti ini: { "name": "Pakaian dan Aksesoris" }.
app.put('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const updatedCategory = req.body;
  const categoryIndex = categories.findIndex(cat => cat.id === categoryId);
  if (categoryIndex === -1) {
    return res.status(404).json({ message: 'Tidak ada kategori' });
  }
  categories[categoryIndex].name = updatedCategory.name;
  res.status(200).json(categories[categoryIndex]);
});

//Jawaban dari soal Buatlah route DELETE yang menghapus kategori berdasarkan ID.
app.delete('/api/categories/:id', (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find(cat => cat.id === categoryId);
  if (!category) {
    return res.status(404).json({ message: 'Tidak ada kategori' });
  }
  categories = categories.filter(cat => cat.id !== categoryId);
  res.status(200).json(category);
});

//Jawaban dari soal Buatlah route GET dengan query string untuk mencari produk berdasarkan nama. Anda bisa asumsikan data produk disimpan dalam array seperti ini: [{ id: 1, name: 'Laptop', category: 'Elektronik' }, { id: 2, name: 'Meja', category: 'Perabotan' }].
app.get('/api/products/search', (req, res) => {
  const productName = req.query.name;
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  res.json(filteredProducts);
});

//Jawaban dari soal Buatlah route GET dengan parameter dan query string untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama. Anda bisa menggunakan array produk dari soal sebelumnya.
app.get('/api/categories/:category/product', (req, res) => {
  const category = req.params.category.toLowerCase();
  const productName = req.query.name ? req.query.name.toLowerCase() : '';
  const filteredProducts = products.filter(product =>
    product.category.toLowerCase() === category &&
    product.name.toLowerCase().includes(productName)
  );
  if (filteredProducts.length === 0) {
    return res.status(404).json({ message: 'Tidak ada produk' });
  }
  res.json(filteredProducts);
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
