const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sudhanshuzoom1:mithushivam@cluster0.pv6h9uc.mongodb.net/",
    );
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;