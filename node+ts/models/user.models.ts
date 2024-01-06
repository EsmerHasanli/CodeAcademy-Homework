const mongoose = require('mongoose');
const UsersSchema = require('../schemas/user.schema.ts')

const UserModel = mongoose.model("User", UsersSchema);

module.exports = UserModel;