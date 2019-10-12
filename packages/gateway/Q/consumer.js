const amqp = require('amqplib/callback_api');

const q = 'test_q';

amqp.connect('amqp://jsvibydg:UMx-2ByfjIzmWdcrmyICOCS1T8yMTjb1@porpoise.rmq.cloudamqp.com/jsvibydg', (err, conn) =>
{
    if (err) throw new Error(err);

    conn.createChannel((err, ch) =>
    {
        if (err) throw new Error(err);

        ch.assertQueue(q, {durable: true});

        ch.consume(q, msg =>
        {
            console.log('I Got a Message', msg.content.toString());
        }, {noAck: true});

    });
});
