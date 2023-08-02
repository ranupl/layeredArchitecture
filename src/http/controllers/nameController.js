const { isValidName } = require("../middleware/isValidName");
const { add100ToName } = require("../../service/nameService");
const { saveData } = require("../../store/nameStore");

exports.create = async (req, res) => {
  const name = req.body.name;
  if (!isValidName(name)) {
    return res.send("Invalid name");
  }

  const manipulateData = add100ToName(name);
  const storeData = await saveData(manipulateData);
  res.send(
    `Data manipulated ${manipulateData} and stored ${storeData}successfully`
  );
};
