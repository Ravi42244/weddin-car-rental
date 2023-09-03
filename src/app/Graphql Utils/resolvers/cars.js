import Car from "../../../../Utils/Model/Car";
import { nullObjectRemover } from "../../../../Utils/nullObjectRemover";

module.exports = {
  Query: {
    getCar: async (_, { _id, carLisencePlateNumber }) => {
      try {
        const filter = nullObjectRemover({ _id, carLisencePlateNumber });
        const car = await Car.findOne(filter).populate("owner", "-password").exec();
        return car;
      } catch (error) {
        return error;
      }
    },
    getCars: async (
      _,
      { rate = null, modelName = null, carType = null, modelNumber = null }
    ) => {
      try {
        const filter = nullObjectRemover({ rate , modelName , carType , modelNumber  });

        const cars = await Car.find(filter).populate("owner","-password").exec();

        return cars;
      } catch (error) {
        return error;
      }
    },
  },
};
