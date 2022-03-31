import express from 'express';
import login from './utilisateur.js';
import story from './histoire.js';
import paragraphe from './paragraphe.js';
import { serve, setup } from 'swagger-ui-express';
import swaggerFile from '../../swagger_output.json';

const router = express.Router();

// Swagger Documentation (before json as it is not json)
router.use('/', serve);
router.get('/', setup(swaggerFile));

// This middleware adds the json header to every response
router.use('*', (req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

router.use(login);
router.use(story);
router.use(paragraphe);

export { router };
