const app = require("./index");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGODB_URL;
const MONGO_DB = process.env.MONGODB_DB;

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
