require("dotenv").config();
const app = require("./index");
const server = require("./configs/db");
const port = process.env.PORT || 3000
// process.env.PORT
app.listen(port, async (req, res) => {
  try {
    await server();
    console.log("Default port is active on PORT",port);
  } catch (e) {
    console.log("e:", e);
  }
});