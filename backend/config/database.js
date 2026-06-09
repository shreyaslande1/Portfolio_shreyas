const mongoose = require("mongoose");

// Disable buffering so queries fail fast when database is disconnected
mongoose.set("bufferCommands", false);

const connectDB = async () => {
  try {
    const mongoURL =
      process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

    const connection = await mongoose.connect(mongoURL);

    console.log("✅ MongoDB Connected Successfully");
    console.log(`Database Host: ${connection.connection.host}`);
    console.log(`Database Name: ${connection.connection.name}`);

    return connection;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);

    // Retry connection after 5 seconds
    console.log("Retrying connection in 5 seconds...");
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
