const Item = require("../database/models/Item");

module.exports = async (req, res) => {
  Item.update(
      { _id: req.params.id},
      {
        available: false
      },
      (error, item) => {
        console.log(error);
        res.redirect("/");
      }
    );
};
