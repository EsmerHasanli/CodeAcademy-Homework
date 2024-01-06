const UserModel = require("../models/user.models");
var mongoose = require('mongoose');
import { Request, Response } from 'express';

const userController = {
  getAll: async (req:Request<object | any>, res:Response<string | object>) => {
    const users = await UserModel.find({});
    if (users.length == 0) {
      res.status(204).send({
        message: "empty array",
      });
    } 
    else {
      res.status(200).send({
        message: "success",
        data: users,
      });
    }
  },
  getOne: async (req:Request<object | any>,res:Response<string | object>) => {
    const { id } = req.params;
    console.log(id)
     
        if (mongoose.Types.ObjectId.isValid(id)) {
          const user = await UserModel.findOne({"_id" : id});
          if (user) {
            res.status(200).send(user);
          } 
          else res.status(404).send("Not Found!");
        }
        else res.status(400).send("Bad Request!");
   
  },  
  delete: async (req:Request<object | any>,res:Response<string | object>) => {
    const { _id } = req.params;
    const deletedUser = await UserModel.findByIdAndDelete(_id);
    const users = await UserModel.find({});
    if (deletedUser === -1) {
      res.send({
        message: "data not found!",
      });
    } else {
      res.status(200).send({
        message: "data deleted successfully",
        data: users,
      });
    }
  },
};

module.exports = userController;
