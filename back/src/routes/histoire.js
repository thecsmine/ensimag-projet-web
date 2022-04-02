import express from 'express';
import { story } from '../controllers/histoire.js';

const router = express.Router();

router.get('/api/readOnly/histoire', story.getStories);
router.post('/api/histoire/', story.createStory);
router.get('/api/histoire/:idHistoire', story.getStory);
router.put('/api/histoire/:idHistoire', story.updateStory);

export default router;
