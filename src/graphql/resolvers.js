// these are just a group of funcitons that return the data
//for a particular query or whatever it might be    

import * as Query from './builtInTypes/Query/mangas';

const resolvers = {
    Query: {
        mangas: () => [{
                id: "1",
                image: "img.jpg",
                title: "One piece",
            },
            {
                id: "2",
                image: "img2.jpg",
                title: "Bleach",
            }
        ]
    }
};

export default resolvers;