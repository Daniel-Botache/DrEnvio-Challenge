import express from 'express';
import morgan from "morgan";
import indexRoutes from "./routes" 
import {connect} from "./db"

const port = process.env.PORT || 3000;


//Initializations
const app =express()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
connect()

//Middlewares
app.use(express.json())
app.use(morgan("dev"));

//Routes
app.use("/", indexRoutes)


module.exports = app;
