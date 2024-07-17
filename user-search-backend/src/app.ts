import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { indexRouter } from './routes/userRoutes';
import { config } from './config';

const app = express();
const port = config.PORT || 5000;
const uri= config.MONGODB_URI||""
app.use(cors());
app.use(bodyParser.json());
app.use('/api', indexRouter);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true,      
  useFindAndModify: false
}).then(() => {
    console.log("MongoDB connected successfully");
  }).catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});