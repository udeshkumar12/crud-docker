import mongoose from "mongoose";

const connectToMongoose = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb://127.0.0.1:27017/crud-appliction"
    );
    if (res) {
      console.log("database connection successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
  

export default connectToMongoose; 