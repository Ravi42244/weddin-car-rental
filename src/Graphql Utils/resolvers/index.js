import usersResolvers from './users';
import carsResolvers from './cars';
module.exports = {
    Query:{
        ...usersResolvers.Query,
        ...carsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation
        
    }
};