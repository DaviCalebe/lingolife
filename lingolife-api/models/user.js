import mongoose from "mongoose";

const {Schema} = mongoose; 

const userSchema = new Schema({

        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        image:{
            type: String,
        },
        
        about:{
            type: String,
            required: true
        },

        language:{

            idioma:{
                type: String,
                required: true
            },

            level:{
                type: String,
                required: true
            },

        },

        posts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service', // Referência ao modelo Forum
        }],

      /*role:{
            type:String,
            default:"user"
        },*/
    },

    {timestamps: true} 
    
)

const User = mongoose.model('User', userSchema);

export {User, userSchema};