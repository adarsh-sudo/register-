const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
const config = {
  useUnifiedTopology: true ,
  useNewUrlParser: true,
};
mongoose.connect("mongodb+srv://adi:123321@cluster.tkidk.mongodb.net/formdata" , config)

const data = {
    email: String,
    password: String
}

const Info = mongoose.model("Info" , data);

app.get("/" , function(req,res){
  res.sendFile(__dirname + "/form2.html");
})

app.post("/" , function(req,res) {
    let newInfo = new Info({
         email: req.body.EMail,
         password: req.body.Password
      });
newInfo.save();
res.redirect("/");
})

app.listen(3000 , function() {
    console.log("server is running");
})
