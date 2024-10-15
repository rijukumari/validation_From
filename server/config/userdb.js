const mongoose  = require("mongoose");
require("dotenv").config()

// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

const connectDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
       });
       console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    }catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
  };

  module.exports = connectDB;


        //  module.exports = async () => {
        //     try {
        //         await mongoose.connect(process.env.MONGO_URL, {});
        //         console.log("CONNECTED TO DATABASE SUCCESSFULLY");
        //     } catch (error) {
        //         console.error('COULD NOT CONNECT TO DATABASE:', error.message);
        //     }
        // };

