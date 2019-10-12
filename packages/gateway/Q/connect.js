'use strict';
const amqp = require('amqplib/callback_api');
const {q: {uri}} = require('../config');

const q = 'test_q';
let channel;


amqp.connect(uri, (err, conn) =>
{
    if (err) throw new Error(err);

    conn.createChannel((err, ch) =>
    {
        if (err) throw new Error(err);

        ch.assertQueue(q, {durable: true});

        ch.sendToQueue(q, Buffer.from('Hello Test Consumer'));
    });

    setTimeout(() =>
    {
        conn.close();

        process.exit(0);
    }, 1000)
});

const pushToMessageQ = msg =>
{
    if (!channel) setTimeout(pushToMessageQ(msg), 1000);
    channel.sendToQueue(q, Buffer.from(msg));

    return {m: 'done'};
};
