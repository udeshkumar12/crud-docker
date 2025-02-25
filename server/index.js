import express from "express";
import cors from "cors";
import connectToMongoose from "./config/db.js";
import userRouter from "./router/user.js";

const app = express();
const PORT = process.env.PORT || 9000 ;
connectToMongoose();


//  apply middleware
app.use(cors()) ;
app.use(express.json());

app.get("/demo",(req,res) =>{
    res.send("hi my name is udesh kumar");
});

app.use("/api/v1/", userRouter);
app.listen(PORT , ()=>{
    console.log(`api is runnig on http://localhost:${PORT}`)
});