'use strict';
const axios = require('axios');

const getMails = async () =>
{
    return (await axios.get(`http://localhost:4001/mails`)).data.payload;
};

module.exports = {
    Query: {
        mails: () => getMails(),
        mail: (_, args) => mockMails[0]
    },
    Mutation: {
        mail: (_, args) => {
            mockMails[0] = args;

            return args;
        }
    }
};
