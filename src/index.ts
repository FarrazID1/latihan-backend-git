//TODO: update commit > "Add user authentication endpoints"
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk register user
//TODO: Test route-1: POST http://localhost:3000/register
app.post('/register', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk register user
  // res.send('User registered');
  res.status(201).json({
    message: 'User registered',
    data: {
      username,
      password,
    },
  });

  console.log('Test of Error =>');
});

// Endpoint untuk login user
//TODO: Test route-2: POST http://localhost:3000/login
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Logika untuk login user
  res.send('User logged in');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//TODO: update commit > "Add product management endpoints"
// Endpoint untuk menambah produk
app.post('/products', (req: Request, res: Response) => {
  const { name, price } = req.body;
  // Logika untuk menambah produk
  res.send('Product added');
});

// Endpoint untuk mendapatkan semua produk
//TODO: Test route-3: GET http://localhost:3000/products
app.get('/products', (req: Request, res: Response) => {
  // Logika untuk mendapatkan semua produk
  res.send('List of products');
});

//TODO: update commit > "Add order processing endpoints"
// Endpoint untuk membuat order
app.post('/orders', (req: Request, res: Response) => {
  const { productId, quantity } = req.body;
  // Logika untuk membuat order
  res.send('Order created');
});

// Endpoint untuk mendapatkan semua order
app.get('/orders', (req: Request, res: Response) => {
  // Logika untuk mendapatkan semua order
  res.send('List of orders');
});
