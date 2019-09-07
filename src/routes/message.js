import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
        userId: req.me.id
    };
    messages[id] = message;
    return res.send(req.context.models.messages);
});

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.messages));
});

router.get('/:messageId', (req, res) => {
    return res.send(req.context.models.messages[req.params.messageId]);
});

router.delete('/:messageId', (req, res) => {
    return res.send(`DELETE methond on message/ ${req.params.userId}`);
});

export default router;
