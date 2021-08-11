const { objectUtils } = require("../utils/util");

const validData = (req, res, next) => {
  const { message: messageValidObjectStructure, canContinue: isValidBody } =
    objectUtils.existPropertiesOnObject(
      req.body,
        "cardNumber",
        "cardName",
        "cvv",
        "expiration"
    );
  if (!isValidBody) {
    return res.status(400).json({ message: messageValidObjectStructure });
  }

  const { message: messageValidValuesOnKeys, canContinue: isValidValuesBody } =
    objectUtils.allKeyWithValidData(req.body);
  if (!isValidValuesBody) {
    return res.status(400).json({ message: messageValidValuesOnKeys });
  }
  next();
};

module.exports.validData = validData;
