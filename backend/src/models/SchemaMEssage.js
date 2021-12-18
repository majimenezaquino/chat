const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  messageSchema  =  new Schema({
    
    message: {
    type: String
    },
    date: {
        type: Date,
        default: Date.now
    }}
   );

let  Message  =  mongoose.model("Message", messageSchema);
module.exports  =  Message;