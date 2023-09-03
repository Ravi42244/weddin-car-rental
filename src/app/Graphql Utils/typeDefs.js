import gql from "graphql-tag";

module.exports = gql `
type User {
_id: ID!
name: String
email: String
mobile: String
cars:[Car]
token: String
}

type Car{
    _id:ID!
    modelName: String!
    modelNumber: String!
    carType: String!
    carLisencePlateNumber: String!
    owner: User!
    rate: String!
}



type Query {

getUser(_id:ID!):User!
getUsers(name:String,_id:ID):[User]!
getCars(rate:String,carType:String,modelName:String,modelNumber: String):[Car]!
getCar(_id:ID,carLisencePlateNumber:String):Car!

}

input registerInput {
    mobile: String!
    name: String!
    password: String!
    email: String

}

input loginInput {
    mobileOremail: String!
    password: String!
    

}


type Mutation {

    userRegistration(userRegisterInput: registerInput!): User!
    userlogin(userLoginInput: loginInput!): User


}
`;