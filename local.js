const app = require("./api/index");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
