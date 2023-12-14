const userModel = require('../models/userModel');

const getAllUser = async(req,res) => {
    try{
        const users = await userModel.find({})

        res.status(200).send({
            success:true,
            message:"All Users",
            users
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message: "Error in Fetching User",
            err
        })
    }
}

const getUserById = async(req,res) => {
    try{
        const {id:userId} = req.params;

        const user = await userModel.findById({_id:userId})

        res.status(200).send({
            success:true,
            message:"User with this Id",
            user
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message: "Error in Fetching User By ID",
            err
        })
    }
}

const addUser = async(req,res) => {
    try{
        const {name,email,address} = req.body;

        if(!name){
            return res.send({message:'User Name is Required'})
        }
        if(!email){
            return res.send({message:'User Email is Required'})
        }
        if(!address){
            return res.send({message:'User Address is Required'})
        }

        if(!name || !email || !address){
            return res.send({message:'Please fill all the fields'})
        }

        const user = new userModel({name,email,address});

        await user.save();

        res.status(201).send({
            success:true,
            message:'User Created Successfully',
            user,
        })

    }catch(err){
        res.status(500).send({
            success:false,
            message: "Error in Creating User",
            err
        });
        console.log(err)
    }
}

const updateUser = async(req,res) => {
    try{

        const {name,email,address} = req.body;
        const {id} = req.params;

        const user = await userModel.findByIdAndUpdate(id,{name,email,address},{new:true});

        res.status(200).send({
            success:true,
            message:"User Updated Successfully",
            user
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message: "Error in Updating User",
            err
        })
    }
}

const deleteUser = async(req,res) => {
    try{
        const {id} = req.params;

        await userModel.findByIdAndDelete(id);

        res.status(200).send({
            success:true,
            message:"User Deleted"
        })
    }catch(err){
        res.status(500).send({
            success:false,
            message: "Error in Deleting User",
            err
        })
    }
}

module.exports = {getAllUser,getUserById,addUser,updateUser,deleteUser}