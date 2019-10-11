'use strict';
const axios = require('axios');

const getMails = async () =>
{
    return (await axios.get(`http://localhost:4001/mails`)).data.payload;
};

const getSingleMail = async id =>
{
   return (await axios.get(`http://localhost:4001/mails/${id}`)).data.payload;
};

const postSingleMail = async body =>
{
  return (await axios.post('http://localhost:4001/mails', {...body})).data.payload;
};

module.exports = {
    Query: {
        mails: () => getMails(),
        mail: (_, {id}) => getSingleMail(id)
    },
    Mutation: {
        mail: (_, args) => postSingleMail(args)
    }
};
