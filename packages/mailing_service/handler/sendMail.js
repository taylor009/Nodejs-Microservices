'use strict';
const { mailjet: { apiPublic, apiSecret } } = require('../config');
const Mailjet = require('node-mailjet').connect(apiPublic, apiSecret);

module.exports = async mail => {
    const request = await Mailjet.post('send').request({
        FromEmail: 'taylor@baremetalcloud.com',
        FromName: 'Taylor',
        Subject: mail.subject,
        'Text-part': mail.content,
        Recipients: [
            {
                Email: mail.receiver
            }
        ]
    });

    console.log(request.body);
};
