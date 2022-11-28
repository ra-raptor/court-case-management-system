import dbConnect from "../../../utils/dbConnect"
import User from "../../../models/User"
import cookie from "cookie";
const jwt = require('jsonwebtoken')
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
const bcrpyt = require('bcryptjs')

dbConnect();
export default async function handler(req,res){
    const {method} = req;
    switch(method){
        case "POST":
            try{
                const salt = await bcrpyt.genSalt(10);
                const hashedPass = await bcrpyt.hash(req.body.password,salt);
                
                console.log(hashedPass);
                req.body.password = hashedPass;
                console.log(req.body);

                if(req.body.accountType === "Laywer"){
                    req.body.accountType = 1;
                }else if(req.body.accountType === "Party in person"){
                    req.body.accountType = 3;
                }
                
                
                const user = await User.create(req.body);
                const token = jwt.sign({id : user.id,userType : user.accountType,firstName : user.firstName,email : user.email},"VIKAS",{expiresIn : '1h'})
                setCookies('auth', token, { req, res, maxAge: 60 * 6 * 24 });
                res.status(200).json({success:true,data:"Success"})

            }catch(error){
                console.log(error);
                
                res.status(400).json({success:false})

            }
            break;
        default:
            res.status(400).json({success:false})
    }
    //res.status(200).json({"name":"vikas"})
}