import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

// Allows Multiple Origins
const allowOrigins = ['http://localhost:5173/']

// MiddleWares Configuration
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin : allowOrigins, credential : true}))



app.get("/", (req, res) => {
    res.send("API is working");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


