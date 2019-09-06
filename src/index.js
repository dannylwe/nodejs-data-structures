import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('ummm...we are live\n');
})
app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);
