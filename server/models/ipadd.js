const mongoose = require("mongoose")

//schema design
const ipSchema = new mongoose.Schema(
    {
        rollno:{
            type: Number,
            required: [true, "Roll number is required"],
        },
        name:{
            type: String,
            required: [true, "Name is required"],
        },
        ipaddress:{
            type: String,
            required: [true, "IP Address is required"],
        }
    },
    {timeStamps: true}
);

//export
const ipadd = mongoose.model("ipaddresses", ipSchema);
module.exports = ipadd;