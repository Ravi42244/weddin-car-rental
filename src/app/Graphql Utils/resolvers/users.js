import { JsonWebTokenError } from "jsonwebtoken";
import User from "../../../../Utils/Model/User";
import { nullObjectRemover } from "../../../../Utils/nullObjectRemover";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
module.exports = {
  Query: {
    getUser: async (_, { _id }) => {
      try {
        const user = await User.findById(_id).populate("cars").exec();
        return user;
      } catch (error) {
        return error;
      }
    },
    getUsers: async (_, { name, _id }) => {
      try {
        const filter = nullObjectRemover({ name, _id });

        const users = await User.find(filter)
          .select("-password")
          .populate("cars")
          .exec();
        return users;
      } catch (error) {
        return error;
      }
    },
  },

  Mutation: {
    userRegistration: async (
      _,
      { userRegisterInput: { mobile, name, password } }
    ) => {
      try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({ mobile, password: hashedPassword, name });
        await user.save();
        return user;
      } catch (error) {
        return error;
      }
    },
    userlogin: async (_, { userLoginInput: { mobileOremail, password } }) => {
      let user = await User.findOne({ email: mobileOremail });
      if (user === null) {
        user = await User.findOne({ mobile: mobileOremail });
        console.log(user)
      }
      if (user === null) {
        return {
          __typename: "Error",
          errorMessage: "User Not Found!",
        };
      }
      const isAuthenticated = await bcrypt.compare(password, user.password);
      if (!isAuthenticated) {
        return {
          __typename: "Error",
          errorMessage: "Wrong Credentials!",
        };
      }
      const token = jwt.sign(
        {
          _id: user._id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          cars: user.cars,
        },
        process.env.JWT_SECERT_KEY
      );

      return {
        __typename: "User",
        token,
      };
    },
  },
};
