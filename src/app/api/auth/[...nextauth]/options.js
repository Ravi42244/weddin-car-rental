
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../Utils/Model/User";
import bcrypt from 'bcrypt'

export const options = {
  // Configure one or more authentication providers
  providers:[
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        
        name: 'Credentials',
      
      
        credentials: {
          mobileOremail: { label: "mobile/email", type: "text", placeholder: "7543453419 or example@email.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize({mobileOremail,password}) {
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
      
      })
    
    // ...add more providers here
  ],
  pages: {
    signIn: '/sign-in',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

  
   

}
