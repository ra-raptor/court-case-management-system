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
        case "POST":
            try{
                console.log(req.body);
                
                const user = await Case.create(req.body);
                res.status(200).json({success:true,data:"Success"})

            }catch(error){
                res.status(400).json({success:false})

            }
            break;
        case "GET":
            try{
               
                
                const cases = await Case.find({});
                res.status(200).json({success:true,data:cases});

            }catch(error){
                res.status(400).json({success:false})

            }
            break
        case "DELETE":
            try{
                const cases = await Case.findOneAndRemove(req.params);
                res.status(200).json({success:true,data:cases});
            }catch(error){
                res.status(400).json({success:false})
            }
        default:
            res.status(400).json({success:false})
    }
    //res.status(200).json({"name":"vikas"})
}