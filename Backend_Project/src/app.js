import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
