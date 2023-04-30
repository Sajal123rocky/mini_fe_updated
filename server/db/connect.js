const mongoose = require('mongoose');

module.exports.connectDB = async (url) => {
    await mongoose.connect(url).then(() => console.log("CONNECTED TO DATABASE"));
};