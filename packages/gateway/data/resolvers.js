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

module.exports = {
    Query: {
        mails: () => getMails(),
        mail: (_, {id}) => getSingleMail(id)
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;

            return args;
        }
    }
};
