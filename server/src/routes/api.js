import express from 'express';

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Indo-Japan MERN backend API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

export default router;
