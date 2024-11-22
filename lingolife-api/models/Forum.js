import mongoose from "mongoose"; 

const { Schema } = mongoose;

const ForumSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required: true,
    },
    fileSrc :{
       type:String,
       required : false ,
    },
    language: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

},
    { timestamps: true } 
);

const Forum = mongoose.model("Forum",ForumSchema);

export { Forum, ForumSchema};