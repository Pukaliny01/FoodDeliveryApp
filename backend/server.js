import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import path from "path";
import { fileURLToPath } from "url";
import 'dotenv/config';

// Fix dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app config
const app = express();
const port = 4000;

// middlewares
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// static files
app.use("/images", express.static(path.join(__dirname, "uploads")));

// api routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);


app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


