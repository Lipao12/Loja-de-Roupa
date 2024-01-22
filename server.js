import bodyParser from "body-parser";
import cors from "cors"; // Adicionado para dar permissao a essa porta
import 'dotenv/config';
import express from "express";
import pg from "pg";

const dbConfig = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

dbConfig.connect();

const app = express();
const port = 4000;

app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function getAllProducts() {
  const result = await dbConfig.query("SELECT * FROM products");
  let prod = result.rows;
  return prod;
}

async function getEspecificProduct(product_id) {
  const result = await dbConfig.query("SELECT * FROM products WHERE id=($1)", [product_id]);
  let prod = result.rows;
  return prod;
}

// GET all products
app.get("/allproducts", async (req, res) => {
  const products = await getAllProducts();
  console.log(products);
  res.json(products);
});

// GET a specific product by id
app.get("/product/:id", async (req, res) => {
  const product = await getEspecificProduct(parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  console.log(product);
  res.json(product);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
