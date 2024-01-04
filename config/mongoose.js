const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Admin_panel1');
const db = mongoose.connection;
db.once('open',function(err){
    if(err){
        console.log("Database Not Connected");
    }
    console.log("Database Is Connected");
});
module.exports=db;