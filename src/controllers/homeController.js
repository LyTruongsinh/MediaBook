import db from "../models/index.js";
import CRUDService from "../services/CRUDService.js";
let getHomepage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
        data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};
let getAboutpage = (req, res) => {
  return res.render("test/about.ejs");
};
// object : {
//     key:
//     value: ''
// }
let getCRUD = (req, res) => {
  return res.render('./crud.ejs')
}

let postCRUD = async (req, res) => {
  let message = await CRUDService.creatNewUser(req.body);
  console.log(message);
  return res.send('post crud from server');
}
let displayCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  console.log(data);
  return res.render('displayCRUD.ejs', {
    dataTable: data
  })
}
module.exports = {
  getHomePage: getHomepage,
  getAboutPage: getAboutpage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
};
