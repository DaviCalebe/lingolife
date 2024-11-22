import mongoose from "mongoose";

const { Schema } = mongoose;

const ChatSchema = new Schema(
    {
        members: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat", ChatSchema);

export { Chat, ChatSchema };
