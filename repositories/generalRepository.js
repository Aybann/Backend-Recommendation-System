const User = require("../schemas/generalSchema");

const saveDetails = async ({ name, email, recommendedCourse }) => {
  try {
    const res = await User.create({ name, email, recommendedCourse });
    return res;
  } catch (error) {
    return error.message;
  }
};

exports.saveDetails = saveDetails;
