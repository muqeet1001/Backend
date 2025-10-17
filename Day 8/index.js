const express = require("express");
const connectToDb = require("./src/db/db");
const useRouter = require("./src/routes/index.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();
app.use("/user", useRouter);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
