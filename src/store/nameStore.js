const { NameDB } = require("../models/nameModel");

const saveData = (name) => {
  const form = new NameDB({ name });
  return form.save();
};

module.exports = { saveData };
