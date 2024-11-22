import mongoose from "mongoose";

const {Schema} = mongoose; 


const messageSchema = new Schema({
    chatId:{
        type: String,
        required: true
    },
    senderId:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },

},
{
    timestamps: true
})

const Message = mongoose.model("Message",messageSchema)

export {Message, messageSchema};
