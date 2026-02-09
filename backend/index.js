import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from './src/routes/userRoute.js';
import audienceRoute from './src/routes/audienceRoute.js';
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

// audience route
app.use("/api/audience", audienceRoute)

//user route
app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
})