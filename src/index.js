import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import uuidv4 from 'uuid/v4';
import models from './models'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1]
    };
    next();
});

app.get('/users', (req, res) => {
    return res.send(Object.values(req.context.models.users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.context.models.params.userId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id
    };
    messages[id] = message;
    return res.send(req.context.models.messages);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(req.context.models.messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
});

app.delete('/message/:messageId', (req, res) => {
    return res.send(`DELETE methond on message/ ${req.params.userId}`);
});

app.get('/session', (req, res) => {
    return res.send(req.context.models.users[req.contest.models.me.id]);
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);

