var express = require("express");
var server = express();
var routes = require("./routes/routes");
var mongoose = require("mongoose");
const cors = require("cors");
mongoose
  .connect("mongodb://127.0.0.1:27017/ebill", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected successfully"))
  .catch((err) => {
    console.error(err);
  });


server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3000, () => {
  console.log("on port 3000");
});

/*server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});*/
