import mongoose, { Schema } from "mongoose";

const CarSchema = new Schema({ modelName: String, modelNumber: String, carType: String, carLisencePlateNumber: String, rate: String ,owner: { type: Schema.Types.ObjectId,
ref: 'User' }});

const Car = mongoose?.models?.Car || mongoose.model("Car", CarSchema);
 


export default Car;