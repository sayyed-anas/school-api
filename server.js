const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();

const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get((req,res) => {
  res.json({message:"Hello json"})
})
app.use("/", schoolRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
