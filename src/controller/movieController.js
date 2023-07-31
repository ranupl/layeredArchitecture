const { MovieDB } = require("../models/movies");

exports.createData = (req, res) => {
  const { name, language, views, likes } = req.body;

  const newData = new MovieDB({
    name: name,
    language: language,
    views: views,
    likes,
    likes,
  });

  newData
    .save()
    .then((data) => {
      res.render("index", { message: "form submitted successfully" });
    })
    .catch((err) => {
        console.log(err);
    })
};
