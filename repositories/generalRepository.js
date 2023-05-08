const User = require("../schemas/generalSchema");

const saveDetails = async ({ name, email, checkedItems, recommendedCourse }) => {
  try {
    const res = await User.create({ name, email, checkedItems, recommendedCourse });
    return res;
  } catch (error) {
    return error.message;
  }
};

exports.saveDetails = saveDetails;
