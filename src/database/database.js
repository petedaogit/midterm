import mongoose from "mongoose";

const DB_CONNECTION =
  "mongodb+srv://namdao9897:h4$wvnG4eP2*Wpz@cluster0.z6bm9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Web83";

const connectDatabases = async () => {
  try {
    await mongoose.connect(DB_CONNECTION);
    console.log("Database is connected successfully!");
  } catch (error) {
    console.error("Failed to connect to Mongo database", error);
    process.exit(1);
  }
};

export default connectDatabases;
