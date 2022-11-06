import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
      success: true,
      message: 'Cat List',
    });
});

router.post('/list', (req: Request, res: Response) => {
    console.log('req.body', req.body);
    res.json({
      success: true,
      message: 'Cat List',
    });
});

export default router;