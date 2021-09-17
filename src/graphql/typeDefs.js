import {
    gql
} from 'apollo-server';


// the ! marks means you have to provide the field
// the ! on [] means that it's always gonna be an array
//and they can't be nullable
const typeDefs = gql `
    type Manga {
        id : ID!
        image : String!
        title : String!
    }

    type Query {
        mangas : [Manga!]!
    }
`;

export default typeDefs;