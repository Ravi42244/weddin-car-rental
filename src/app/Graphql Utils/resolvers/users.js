import User from '../../../../Utils/Model/User'
import { nullObjectRemover } from '../../../../Utils/nullObjectRemover';
import { GraphQLError } from 'graphql';
module.exports = {

  Query: {
    getUser: async (_, {_id}) => {

try {

  const user = await User.findById(_id).populate('cars').exec();
      return (user)
} catch (error) {
  return (error)
  
}


      
    },
    getUsers: async (_,{name,_id}) => {

      try {
        const filter = nullObjectRemover({name,_id})

        const users = await User.find(filter).select('-password').populate('cars').exec();
        return (users)
      } catch (error) {
        return(error)
        
      }
     
    }
  },

  Mutation: {
    userRegistration: async (_, { userRegisterInput: { mobile, name, password } }) => {
   try {
    const hashedPassword= bcrypt.hashSync(password,20)
    const user = new User({mobile,password:hashedPassword,name},{password:0})
    await user.save();
    return (user)
   } catch (error) {
    return(error)
   }
     

    },
    userlogin: async (_, { userLoginInput: { mobileOremail, password } }) => {
   
      let user=await User.findOne({email:mobileOremail})
      
      if(!user){
        user=await User.findOne({mobile:mobileOremail})
        console.log(user)
        if(!user){
         
        }
      }
      

    }
  }

}     