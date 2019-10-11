'use strict';
const amqp = require('amqplib/callback_api');

const q = 'test_q';
let channel;


amqp.connect('cloudAMQPURL', (err, conn) =>
{
    if (err) throw new Error(err);

    conn.createChannel((err, ch) =>
    {
        if (err) throw new Error(err);

        ch.assertQueue(q, {durable: true});

        ch.sendToQueue(q, Buffer.from('Hello RabbitMQ'));
    })
});
