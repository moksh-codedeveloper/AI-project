// import { bcrypt } from "bcrypt";
import { jwt } from "jsonwebtoken";
import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, isPremium: this.isPremium },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const User = model("User", userSchema);
