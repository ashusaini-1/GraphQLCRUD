const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema=require('../model/graphModel')
const resolvers = require('../controller/graphResolver'); // Import your resolvers

const router = express.Router();

router.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

module.exports = router;
