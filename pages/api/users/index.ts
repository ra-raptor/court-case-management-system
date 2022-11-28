import dbConnect from "../../../utils/dbConnect"
import User from "../../../models/User"
import { authenticated } from "../../../utils/authentication";
dbConnect();
export default authenticated( async function handler(req,res){
    const {method} = req;
    switch(method){
        case "GET":
            try{
                const users = await User.find({})
                res.status(200).json({success:true,data:users})
            }catch(error){
                console.log(error);
                
                res.status(400).json({success:false})
            }
            break;
        case "POST":
            try{
                const user = await User.create(req.body);
                //res.status(200).json({success:true,data:user})

            }catch(error){
                res.status(400).json({success:false})

            }
            break;
    }
    //res.status(200).json({"name":"vikas"})
})