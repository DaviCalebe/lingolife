import { Chat } from '../models/chatModel.js';

const chatController = {

 createChat : async(req, res) => {
    const{firstId,secondId} = req.body

    try{
        const chat = await Chat.findOne({
            members:{$all:[firstId,secondId]}
        })

        if(chat)return res.status(200).json;

        const newChat = new Chat({
            members: [firstId,secondId]
        });

        const response = await newChat.save();
        res.status(200).json(response);

    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
},

 findUserChats : async (req,res) =>{
    const userId = req.params.userId;

    try{
        const chats = await Chat.find({
            member: {$in: [userId]}
        })

        res.status(200).json(chats);
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    }
},

 findChat : async (req,res) =>{
    const {firstId,secondId} = req.params;

    try{
        const chat = await Chat.find({
            member: {$in: [firstId,secondId]}
        })

        res.status(200).json(chat);
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}
};

export default chatController;