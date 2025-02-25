import db from "../models/index.js";
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

let postCRUD = (req, res) => {
  console.log(req.body);
  return res.send('post crud from server');
}
module.exports = {
  getHomePage: getHomepage,
  getAboutPage: getAboutpage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
