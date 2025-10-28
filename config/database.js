const URI="mongodb+srv://tejashwinibn23_db_user:R4JidSoOO2HGUuXi@cluster0.fflaqwu.mongodb.net/NammaMetro";
const mongoose= require("mongoose");
async function connectDB()
{
    await mongoose.connect(URI)
}
module.exports=connectDB;