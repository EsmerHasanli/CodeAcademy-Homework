const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/user.controller.ts');

userRouter.get('/', userController.getAll);

userRouter.get('/:id', userController.getOne);

userRouter.delete('/:id', userController.delete);


module.exports = userRouter;