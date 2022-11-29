import dbConnect from "../../../utils/dbConnect"
import Case from "../../../models/Case"
import cookie from "cookie";
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next';
dbConnect();
export default async function handler(req,res){
    const {method} = req;
    switch(method){
        case "GET":
            try{
                const {id} = req.query;
                console.log("hlo");
                
                console.log(id);
                
                const cases = await Case.findOne({_id : id});
                res.status(200).json({success:true,data:cases});

            }catch(error){
                res.status(400).json({success:false})
            }
            break
        default:
            res.status(400).json({success:false})
    }
    //res.status(200).json({"name":"vikas"})
}