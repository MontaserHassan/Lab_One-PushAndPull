const mongoose = require("mongoose");

const { Schema } = mongoose;


const notificationSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength: 256
        }, 
    },
    {
        timestamps: true
    }
);

const Notification = mongoose.model( "Notification" , notificationSchema );

module.exports = {
    Notification,
};