const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
  try {

    // Connect to MongoDB, using the MONGO_URI from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // New URL string parser
      useUnifiedTopology: true, // Server Discover and Monitoring engine
    });
    console.log("MongoDB Connected"); // If connected successfully, log this message
  } catch (error) {
    console.error(`Error: ${error.message}`); // If there is an error, log the error message
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
