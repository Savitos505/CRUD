import Role from "../model/Role.js";
import User from "../model/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()


function generateAT(id, role){
    const payload = {
        id,role
    }
    return jwt.sign(payload, process.env.secret_key, {expiresIn:"24h"})
}
class Authcontroler{
    async register(req,res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(user){
                return res.status(400).json({message: "this user already exist"})
            }
            const hashPassword = bcrypt.hashSync(password,3)
            const userRole = Role.findOne({value:"USER"})
            const newUser = new User({username, password:hashPassword, role:[userRole.value] })
            await newUser.save()
            return res.json({message:"user is created"})

        }catch(e){
            console.log(e);
            res.status(400).json({message:e})
        }
    }

    async login(req,res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: "this user is not exist"})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message:"invalid password"})
            }
            const token = generateAT(user._id , user.role)
            return res.json(token)

        }catch(e){
            console.log(e);
            res.json({message:e})
            
        }
    }

    async getUser(req,res){
        try{

        }catch(e){
            console.log(e);
            res.json({message:e})
            
        }
    }

    async CreateRoles(req,res){
        try{
            const user = new Role()
            const admin = new Role({value:"ADMIN"})
            await user.save()
            await admin.save()
            res.json({message:"roles created succes"})

        }catch(e){
            console.log(e);
            res.json({message:e})
        }
    }
}
export default new Authcontroler