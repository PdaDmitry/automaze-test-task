const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const clientsRouter = require("./routes/auth");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = ["http://localhost:5173", process.env.FRONT_URL].filter(
  Boolean
);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", clientsRouter);

// const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;
const MONGO_DB = process.env.MONGODB_DB;

mongoose
  .connect(MONGO_URL, {
    dbName: MONGO_DB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`✅ Connected to MongoDB database: ${MONGO_DB}`))
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Сервер работает через Mongoose!");
});

// app.listen(PORT, () => {
//   console.log(`🚀 Server started on http://localhost:${PORT}`);
// });

module.exports = app;
