import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
app.use(cors({
    origin :process.env.CORS_ORIGIN,
    credentials:true
}))

app.use((req, res, next) => {
    console.log('--- Incoming Request ---');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// routes import
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)

export {app}

