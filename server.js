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

//////////// FUNCTIONS ///////////////
//////////////////////////////////////
//////////////////////////////////////

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

async function getFilteredProductsByCollection(collection_id) {
  const result = await dbConfig.query(`SELECT products.id, products.name, products.price, products.images FROM products JOIN colecoes ON products.collection_id = colecoes.id WHERE colecoes.id = ${collection_id}`);
  let prod = result.rows;
  return prod;
}

async function getFilteredProductsByCategory(category) {
  const result = await dbConfig.query(`SELECT products.id, products.name, products.price, products.images FROM products WHERE products.categoria = '${category}'`);
  let prod = result.rows;
  return prod;
}

async function getAllCollections() {
  const result = await dbConfig.query("SELECT * FROM colecoes ORDER BY id");
  let prod = result.rows;
  return prod;
}

async function getEspecificCollection(collection_id) {
  const result = await dbConfig.query("SELECT * FROM colecoes WHERE id=($1)", [collection_id]);
  let prod = result.rows;
  return prod;
}

/////////////// HTTP //////////////////
//////////////////////////////////////
//////////////////////////////////////

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

// GET a specific product by collecion
app.get("/productcol/:id", async (req, res) => {
  const filteredProducts = await getFilteredProductsByCollection(parseInt(req.params.id));
  if (!filteredProducts) return res.status(404).json({ message: "Products not found" });
  console.log(filteredProducts);
  res.json(filteredProducts);
});

// GET a specific product by category
app.get("/category/:name", async (req, res) => {
  console.log(typeof req.params.name)
  const filteredProducts = await getFilteredProductsByCategory(req.params.name);
  if (!filteredProducts) return res.status(404).json({ message: "Products not found" });
  console.log(filteredProducts);
  res.json(filteredProducts);
});

// GET all collections
app.get("/allcollections", async (req, res)=>{
  const collections = await getAllCollections();
  res.json(collections);
})

// GET a specific collection by id
app.get("/collection/:id", async (req, res) => {
  const collection = await getEspecificCollection(parseInt(req.params.id));
  if (!collection) return res.status(404).json({ message: "Collection not found" });
  console.log(collection);
  res.json(collection);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
