const express = require('express');
const usermodel = require('../models/usermodel')

const singUpUser = (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.json(400)({message: "Please Enter All Field"})
    } else {
        usermodel.create(req.body)
            .then(employees => res.json(employees))
            .catch(err => res.json(err))
    }
}

const singInUser = (req,res) =>{
    const {email,password} = req.body;

    usermodel.findOne({email:email})
    .then(user=>{
    if(user){
        if(user.password === password){
            res.json("Done!")
        }else{
            res.json("Password is Incorrect")
        }
    }else{
        res.json("No recorded exceted")
    }


    })
}






module.exports = {
    singUpUser,
    singInUser
}


