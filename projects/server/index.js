const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;
const MONGO_DB = process.env.MONGODB_DB;

// Подключение к MongoDB
const client = new MongoClient(MONGO_URL);

async function connectDB() {
  try {
    await client.connect();
    console.log(`✅ Connected to MongoDB database: ${MONGO_DB}`);
    const db = client.db(MONGO_DB);
    return db;
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
}

let db;
connectDB().then((database) => {
  db = database;
});

app.get("/", (req, res) => {
  res.send("Сервер работает!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
