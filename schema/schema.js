const graphql = require('graphql');
const { GraphQLSchema } = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphql;

const movies = [
  {
    id: '1',
    name: 'Pulp fiction',
    genre: 'Criminal',
  },
  {
    id: '2',
    name: 'Terminal',
    genre: 'Comedy',
  },
  {
    id: 3,
    name: 'Interstellar',
    genre: 'Future',
  }, {
    id: '4',
    name: 'Batman',
    genre: 'Super Heroes',
  },
];

const directors = [
  {
    id: '1',
    name: 'Quentin Tarantino',
    age: 55,
  },
  {
    id: '1',
    name: 'Michael Redford',
    age: 72,
  },
  {
    id: '1',
    name: 'James Mc',
    age: 51,
  },
  {
    id: '1',
    name: 'Gui Ritchie',
    age: 50,
  },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find((movie) => movie.id == args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
