import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import models from './models';
import routes from './routes';
import postRoutes from './routes/postRoutes'

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

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use(postRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`listening on port ${process.env.PORT}!`),
);

