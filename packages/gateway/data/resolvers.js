'use strict';
const {serviceDatabase: {port}} = require('../config');
const axios = require('axios');

const {pushToMessageQ} = require('../Q/connect');

const hostName = 'http://localhost';
const databaseURL = `${hostName}:${port}`;

const get = async path => (await axios.get(`${databaseURL}/${path}`)).data.payload;

const post = async (path, body) => (await axios.post(`${databaseURL}/${path}`, {...body})).data.payload;


module.exports = {
    Query: {
        mails: () => get('mails'),
        mail: (_, {id}) => get(`mails/${id}`)
    }, Mutation: {
        mail: (_, args) => {
            let result;
            let error;

            try {
                result = post('mails', args)
            } catch (e) {
                error = e;
            }

            pushToMessageQ(JSON.stringify(args));

            return result || error;
        }
    }
};
