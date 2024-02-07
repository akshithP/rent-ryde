import mongoose from "mongoose";

// Function to create connection to the database
const connect = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection established");
  } catch (err) {
    throw new Error("Error connecting to Mongo");
  }
};

export default connect;
