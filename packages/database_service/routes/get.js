'use strict';
const mongoose = require('mongoose');
const Mail     = mongoose.model('Mail');

module.exports = server =>
{
    server.get('/', async(_, res) =>
    {
        const m = new Mail({
            subject: 'Hello Subj', receiver: 'test@test.com', content: 'Hello content'
        });

        try{
            await m.save();
        }catch(error)
        {
            console.log(error.message);
        }
        res.send('Worked');
    })

    .get('/test', async (_, res) =>
    {
        let mails;
       try{
           mails = await Mail.find();
       }catch(error){
           console.log(error.message);
       }
        res.send(mails);
    })
};
