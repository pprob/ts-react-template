import express, {Request, Response} from 'express';

const router = express.Router();

router.use((req: Request, res: Response) => {
  res.render('index.html');
});

export default router;
