const User=require("../models/user");
const { check,validationResult } = require('express-validator');
 


exports.signup=(req,res)=>{


    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error:errors.array()[0].msg
        })
    }


    const user= new User(req.body);
    user.save((err,user)=>{
        console.log("Saving");
        if(err || !user){
            return res.status(400).json({
                err:"Not able to save "
            })
        }
        res.json(user);

    })
    
};


exports.signout=(req,res)=>{
    res.send("user signout from controller");

}

