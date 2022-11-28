import dbConnect from "../../../utils/dbConnect"
import User from "../../../models/User"
dbConnect();
export default async function handler(req,res){
    const {method} = req;
    switch(method){
        case "GET":
            try{
                const email = ""+req.query.email;
                const users = await User.find({email : email})

                
                res.status(200).json({success:true,data:users.length});
                //res.status(200).json({success:true,data:users})
            }catch(error){
                console.log(error);
                
                res.status(400).json({success:false})
            }
            break;
    }
    //res.status(200).json({"name":"vikas"})
}