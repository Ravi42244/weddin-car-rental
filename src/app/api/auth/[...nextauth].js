import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../Utils/Model/User";
import { nullObjectRemover } from "../../../../Utils/nullObjectRemover";
import bcrypt from 'bcrypt'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    
    // ...add more providers here
  ],
   credentials: {
    mobileOremail: { label: "mobile/email", type: "text", placeholder: "7543453419 or example@email.com" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials, req) {
    let user = await User.findOne({ email: mobileOremail });
    if (user === null) {
      user = await User.findOne({ mobile: mobileOremail }, );
          }
    if (user === null) {
      return ({
        __typename: "Error",
        errorMessage: "User Not Found!" ,
      });

    }
const isAuthenticated = await bcrypt.compare(password,user.password)
if(!isAuthenticated){
return ({
__typename: "Error",
errorMessage: "Wrong Credentials!" ,
}); 
}
    return ({
      __typename: "User",
      _id:user._id,
      name:user.name,
email:user.email,
mobile:user.mobile,
cars:user.cars,
token:user.token
    })
}
,secret: process.env.JWT_SECERT_KEY
}
export default NextAuth(authOptions)