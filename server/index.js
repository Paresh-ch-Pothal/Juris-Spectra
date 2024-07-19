const express=require("express")
const ConnectToMongoDb=require("./connect");
const path=require("path");
const cors = require('cors');
const bodyParser=require("body-parser");
const newsLargeRoutes=require("./routes/newslarge");
const newsSmallRoutes=require("./routes/newssmall");
const searchRoutes=require("./routes/search");

ConnectToMongoDb();
const port=5000;

const app=express()
app.use(bodyParser.json());
app.use(express.urlencoded({extended:  true}));
app.use(cors()); // Initialize CORS middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api",newsLargeRoutes);
app.use("/api",newsSmallRoutes);
app.use("/api",searchRoutes);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})