
import db from "../models/index.js";
import bcrypt from "bcryptjs";
let salt = bcrypt.genSaltSync(10);

let creatNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassWord(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phonenumber,
      })
      resolve('Creat new User succeed');
    } catch (e) {
      reject(e);
    }
  });
};
// hasing password
let hashUserPassWord = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  creatNewUser: creatNewUser,
};
