const mongoose = require("mongoose");
require("dotenv").config();

const DB = () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Database connected");
            });
    } catch (err) {
        console.log(err);
    }
};

module.exports = DB;
