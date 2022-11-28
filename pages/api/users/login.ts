import dbConnect from "../../../utils/dbConnect"
import User from "../../../models/User"
import cookie from "cookie";
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
dbConnect();
export default async function handler(req,res){
    const {method} = req;
    switch(method){
        case "POST":
            try{
                console.log(req.body);
                
                const user = await User.findOne({email : req.body.email});
                if(!user){
                    res.status(404).json({success:false,msg: "User not found"})
                }
                if(!await bcrpyt.compare(req.body.password,user.password)){
                    res.status(404).json({success:false,msg: "Invalid credentaials"})
                }
                const token = jwt.sign({id : user.id,userType : user.accountType,firstName : user.firstName,email : user.email},"VIKAS",{expiresIn : '1h'})
                
                
                
                // res.setHeader('Set-Cookie',cookie.serialize('auth',token),{
                //    httpOnly : true,
                //    secure : process.env.NODE_ENV !== 'development',
                //     sameSite : 'strict',
                //    maxAge : 3600,
                //     path : '/'
                // },)
                setCookies('auth', token, { req, res, maxAge: 60 * 6 * 24 });
                res.status(200).json({authToken : token})

            }catch(error){
                res.status(400).json({success:false})

            }
            break;
        default:
            res.status(400).json({success:false})
    }
    //res.status(200).json({"name":"vikas"})
}