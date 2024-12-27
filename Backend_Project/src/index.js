import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv({
  path: "./.env",
});
const PORT = 3000 || process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected to the database :- ${PORT}`);
    });
  })
  .catch(() => {
    throw new Error("Error connecting to the database");
  });
