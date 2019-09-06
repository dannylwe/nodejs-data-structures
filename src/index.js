import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

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
    return res.send(users[req.params.id]);
});

app.post('/users', (req, res) => {
    return res.send('ummm...we are live\n');
});

app.put('/users/:userId', (req, res) => {
    return res.send(`PUT methond on user/ ${req.params.userId}`);
});

app.delete('/users/userId', (req, res) => {
    return res.send(`DELETE methond on user/ ${req.params.userId}`);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);
