import { Schema,models,model } from "mongoose";



const UserSchema = new Schema({ name: String, email: String, password:{  type: String, select: false } ,mobile: String, cars: [{ type: Schema.Types.ObjectId,
    ref: 'Car' }] });

const User = models?.User || model("User", UserSchema);
 


export default User;