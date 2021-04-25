import express from 'express';
import mutationRoutes from './mutation';
import statsRoutes from './stats';

const router = express.Router();

router.use('/mutation', mutationRoutes);
router.use('/stats', statsRoutes);

export default router;
