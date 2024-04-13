const mongoose = require("mongoose")

mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

//schema design
const macAddressSchema = new mongoose.Schema(
    {
        macAddress:{
            type: String,
            unique: true,
            required: [true, "MAC Address is required"],
        }
    },
    {timeStamps: true}
);

//export
const macadd = mongoose.model("macaddresses", macAddressSchema);

async function getMACAddress(macAddressToFetch) {
    try {
      const mac = await macaddresses.findOne({ macAddress: macAddressToFetch });
      if (mac) {
        return mac.macAddress;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching MAC address:', error);
      throw error;
    }
  }
  
  module.exports = { getMACAddress };