import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import uuidv4 from 'uuid/v4';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    req.me = users[1];
    next();
});

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
};

let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id
    };
    messages[id] = message;
    return res.send(messages);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.delete('/message/:messageId', (req, res) => {
    return res.send(`DELETE methond on message/ ${req.params.userId}`);
});

app.get('/session', (req, res) => {
    return res.send(users[req.me.id]);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);

// MODULAR MODELS IN EXPRESS AS DATA SOURCES NEXT
